import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UserRepository } from 'src/db/repositories/user.repository';

@Injectable()
export class UserService {
    constructor(
       private readonly userRepo: UserRepository
    ) {}

   async create(dto: CreateUserDto){
    return await this.userRepo.createUser(dto)
   }

   async findbyName(name: string){
     return await this.userRepo.findByName(name)
   }

   async remove(id: string){
      return await this.userRepo.delete(id)  
   }
}
