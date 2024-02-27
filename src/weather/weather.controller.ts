import { Body, Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { CreateDto } from './dto/CreateLon.dto';

@Controller('weather')
export class WeatherController {
    constructor(
        private readonly weatherService: WeatherService
    ){}
    
    @Get('get')
    async getData(){
        return await this.weatherService.getData()
    }
}
