import { InjectRepository } from "@nestjs/typeorm";
import { Weather } from "../entity/weather.entity";
import { Repository } from "typeorm";
import { BaseRepository } from "src/shared/base/base.repository";

export class  WeatherRepository extends BaseRepository<Weather> {
    constructor(
      @InjectRepository(Weather)
      protected readonly repository: Repository<Weather>,
    ) {
        super()
    }
    
    async createLonDto(data:any){
        const lon = await this.repository.create(data)
        return await this.repository.save(lon)
    }
}