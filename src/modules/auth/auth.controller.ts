import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../../modules/user/dto/create.user.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('registration')
@Controller('auth')
export class AuthController {
    constructor(
       private readonly authService: AuthService
    ){}

    @Post('register')
    async createUser(@Body() dto: CreateUserDto){
        return await this.authService.register(dto)
    }

    @Post('login')
    async login(@Body() dto: LoginDto){
        return await this.authService.login(dto)
    }
}
