import { Module } from '@nestjs/common';
import { DbModule } from './db/database.module';
import { UserModule } from './user/user.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    DbModule, 
    UserModule,
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
