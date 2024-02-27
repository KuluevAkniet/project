import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { DbModule } from 'src/db/database.module';
import { CloudinaryModule } from 'src/сloudinary/cloudinary.module';
import { CloudinaryService } from 'src/сloudinary/cloudinary.service';

@Module({
  imports: [DbModule, CloudinaryModule],
  controllers: [PropertyController],
  providers: [PropertyService, CloudinaryService]
})
export class PropertyModule {}
