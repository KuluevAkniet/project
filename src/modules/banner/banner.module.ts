import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import { DbModule } from 'src/db/database.module';
import { CloudinaryService } from 'src/сloudinary/cloudinary.service';

@Module({
  imports: [DbModule],
  providers: [BannerService, CloudinaryService],
  controllers: [BannerController]
})
export class BannerModule {}
