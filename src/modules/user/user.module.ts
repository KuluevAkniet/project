import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DbModule } from 'src/db/database.module';

@Module({
  imports: [DbModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserModule, UserService]
})
export class UserModule {}
