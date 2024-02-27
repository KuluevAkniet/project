import { BaseRepository } from "src/shared/base/base.repository";
import { User } from "../entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "src/modules/user/dto/create.user.dto";

export class  UserRepository extends  BaseRepository<User> {
    constructor(
      @InjectRepository(User)
      protected readonly repository: Repository<User>,
    ) {
        super();
    }

    async createUser(data: CreateUserDto){
      const savedUser =  this.repository.create(data)
      return await this.repository.save(savedUser)
    }

    async findByName(name: string){
      return await this.repository.findOne({
         where: {name}
      })
    }
    
}