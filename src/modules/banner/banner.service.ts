import { Injectable } from '@nestjs/common';
import { BannerRepository } from 'src/db/repositories/banner.repository';
import { CreateBannerDto } from './dto/create-banner.dto';
import { CloudinaryService } from 'src/сloudinary/cloudinary.service';

@Injectable()
export class BannerService {
    constructor(
        private readonly bannerRepository: BannerRepository,
        private readonly cloudinaryService: CloudinaryService
    ){}

    async create(dto: CreateBannerDto, video: Express.Multer.File){

        if(video){
          const uploadVideo = await this.cloudinaryService.uploadImage(video)
          dto.video = uploadVideo.url
        }
        return await this.bannerRepository.createBanner(dto)
    }

}
