import { BaseRepository } from "src/shared/base/base.repository";
import { Property } from "../entity/property.entity";
import { User } from "../entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePropertyDto } from "src/modules/property/dto/create.property.dto";

export class  PropertyRepository extends  BaseRepository<Property> {
    constructor(
      @InjectRepository(Property)
      protected readonly repository: Repository<Property>,
    ) {
        super();
    }

    async createProperty(dto: CreatePropertyDto){
       const property = this.repository.create(dto);
       return await this.repository.save(property)
    }
}