import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entity/user.entity";
import { BaseRepository } from "src/shared/base/base.repository";
import { Repository } from "typeorm";

export class AuthRepository extends  BaseRepository<User> {
    constructor(
      @InjectRepository(User)
      protected readonly repository: Repository<User>,
    ) {
        super();
    }

    async createUser(criteria: any){
      return await this.repository.create(criteria)
    }
    
}