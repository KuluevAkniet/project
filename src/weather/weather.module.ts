import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { HttpModule} from '@nestjs/axios';
import { DbModule } from 'src/db/database.module';


@Module({
  imports:[HttpModule.register({}), DbModule],
  providers: [WeatherService],
  controllers: [WeatherController]
})
export class WeatherModule {}
