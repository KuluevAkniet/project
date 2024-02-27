import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto/CreateLon.dto';
import { WeatherRepository } from 'src/db/repositories/weather.repository';

@Injectable()
export class WeatherService {
    constructor(
        private readonly httpService: HttpService,
        private readonly weatherRepository: WeatherRepository
    ) {}
    
    async getData() {
        try {
            const { data } = await this.httpService.get('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=6a13a3e0da5951e0d49805e3e4abbf52').toPromise();
            const weatherData = {
                lon:parseInt(data.coord.lon),
                lan:parseInt(data.coord.lat),
            };
            return await this.weatherRepository.create(weatherData);
        } catch (error) {
            throw new Error(`An error occurred: ${error.message}`);
        }
    }
}
