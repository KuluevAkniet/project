import { Injectable } from '@nestjs/common';
import { PropertyRepository } from 'src/db/repositories/property.repository';
import { CreatePropertyDto } from './dto/create.property.dto';
import { CloudinaryService } from 'src/сloudinary/cloudinary.service';


@Injectable()
export class PropertyService {
    constructor(
        private readonly propertyRepo: PropertyRepository,
        private readonly cloudinaryService: CloudinaryService
    ){}

    async create(
      dto: CreatePropertyDto, 
      prephoto?: Express.Multer.File,
      photos?: Array<Express.Multer.File>
    ) {
      const img = await this.cloudinaryService.uploadImage(prephoto)
      if(prephoto){
        dto.prephoto = img.url
      }

      if (photos) {
        dto.photos.push(img.url)
      }
    
      return await this.propertyRepo.create(dto);
    }
    
    
      
      

    // async uploadImage(file: Express.Multer.File) {
    //     const photos = await this.cloudinaryService.uploadImage(file)
    //     return photos  
    // }
    
}
