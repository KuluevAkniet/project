import { Module } from '@nestjs/common';
import { DbModule } from './db/database.module';
import { UserModule } from './modules/user/user.module';
import { CacheModule } from '@nestjs/cache-manager';

import * as redisStore from 'cache-manager-redis-store';
import { AuthModule } from './modules/auth/auth.module';
import { PropertyModule } from './modules/property/property.module';
import { BannerModule } from './modules/banner/banner.module';
import { TeamService } from './modules/team/team.service';
import { TeamController } from './modules/team/team.controller';
import { TeamModule } from './modules/team/team.module';
import { WeatherModule } from './weather/weather.module';
import { WeatherService } from './weather/weather.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    DbModule, 
    UserModule,
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    }),
    AuthModule,
    PropertyModule,
    BannerModule,
    TeamModule,
    WeatherModule,
    HttpModule.register({})
  ],
  controllers: [TeamController],
  providers: [TeamService, WeatherService],
})
export class AppModule {}
