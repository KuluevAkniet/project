import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../../modules/user/user.module';
import { DbModule } from 'src/db/database.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [UserModule, DbModule,
     JwtModule.registerAsync({
      useFactory: async(configService: ConfigService) =>({
        secret:  configService.get("JWT_SECRET"),
        signOptions: {expiresIn:configService.get("JWT_EXPIRES_IN")}
      }),
      inject: [ConfigService]
     }),
     CacheModule.register()
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
