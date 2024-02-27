import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserRepository } from './repositories/user.repository';
import { User } from './entity/user.entity';
import { TypeormConfigService } from './typeorm-config.service';
import { PropertyRepository } from './repositories/property.repository';
import { BannerRepository } from './repositories/banner.repository';
import { TeamRepository } from './repositories/team.repository';
import { Property } from './entity/property.entity';
import { Team } from './entity/team.entity';
import { Banner } from './entity/banner.entity';
import { Weather } from './entity/weather.entity';
import { WeatherRepository } from './repositories/weather.repository';


@Module({
  imports: [
   TypeOrmModule.forRootAsync({
     imports: [ConfigModule.forRoot({
      isGlobal: true
     })],
     useClass: TypeormConfigService,
     inject: [ConfigService],
   }),
   TypeOrmModule.forFeature([User, Property, Team, Banner,Weather])
  ],
  providers: [
    UserRepository,
    PropertyRepository,
    BannerRepository,
    TeamRepository,
    WeatherRepository
  ],
  exports: [
   UserRepository,
   PropertyRepository,
   BannerRepository,
   TeamRepository ,
   WeatherRepository
  ],
})
export class DbModule {}
