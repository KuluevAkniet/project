import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Banner')
@Controller('banner')
export class BannerController {
    constructor(
       private readonly bannerService: BannerService
    ){}

    @Post('createBanner')
    @UseInterceptors(FileInterceptor('video'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'Video upload',
        type: CreateBannerDto, 
    })
    async create(@Body() dto: CreateBannerDto, video: Express.Multer.File){
        return await this.bannerService.create(dto, video)
    }
}
