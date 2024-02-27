import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../../modules/user/user.service';
import { CreateUserDto } from '../../modules/user/dto/create.user.dto';
import * as bcrypt from 'bcrypt';
import { Cache } from 'cache-manager'; 
import { User } from 'src/db/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly _configService: ConfigService,
        private readonly jwtService: JwtService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ){}

    async register(dto: CreateUserDto){
        const users = await this.userService.findbyName(dto.name);
      
        if (users) {
          throw new NotFoundException('Пользователь с таким логином уже существует');
        }
      
        const hashPassword = await this.encodePassword(dto.password);
        const newUser = { ...dto, password: hashPassword.password };
      
        return await this.userService.create(newUser);
    }

    async login(dto: LoginDto){
        const users = await this.userService.findbyName(dto.name);
        if (!users || !bcrypt.compareSync(dto.password, users.password)) {
            throw new BadRequestException({
              success: false,
              error: 'Неверный логин или пароль',
            });
        }

        return this.generateToken(users)
    }
      

    async encodePassword(password: string): Promise<{ password: string }> {
        const encodedPassword = { password: (await bcrypt.hash(password, 10)) as string };
        return encodedPassword;
    }

    public async generateToken(user: User) {
        const accessPayload = {
          sub: user.id,
          login: user.name,
          type: 'access',
        };
    
        const refreshPayload = {
          sub: user.id,
          login: user.name,
          type: 'refresh',
        };
    
        const accessToken = this.jwtService.sign(accessPayload, {
          secret: this._configService.get('JWT_SECRET'),
          expiresIn: this._configService.get('JWT_EXPIRES_IN'),
        });
    
        const refreshToken = this.jwtService.sign(refreshPayload, {
          secret: this._configService.get('JWT_SECRET'),
          expiresIn: this._configService.get('JWT_EXPIRES_IN'),
        });
    
        await this.cacheManager.set('key', accessToken);  
        await this.cacheManager.set('key2', refreshToken); 
    
        const cachedAccessToken = await this.cacheManager.get<string>('key');
        const cachedRefreshToken = await this.cacheManager.get<string>('key2');
    
        return {
          accessToken: await this.updateToken(cachedAccessToken),
          refreshToken: cachedRefreshToken || refreshToken,
        };
    }

    async updateToken(accessToken: string) {
      const checkToken =  this.jwtService.verify(accessToken);
      const userId = checkToken.sub;

      const cachedAccessToken = await this.cacheManager.get<string>('key');
      
      if(cachedAccessToken){
        return cachedAccessToken
      }

      const newAccessToken = this.jwtService.sign({ sub: userId, type: 'access' });
      await this.cacheManager.set('key', newAccessToken);

      return newAccessToken
    }
}
