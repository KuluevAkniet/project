import { Body, Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create.property.dto';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@ApiTags('property')
@Controller('property')
export class PropertyController {
    constructor(
       private readonly propertyService: PropertyService
    ){}
    
    @ApiOperation({ summary: 'Create property' })
    @Post('create')
    @ApiConsumes('multipart/form-data')
     @UseInterceptors(
        FileFieldsInterceptor([
        { name: 'prephoto', maxCount: 1 },
        { name: 'photos', maxCount: 20 },
       ])
     )
    @ApiBody({
     description: 'File upload',
     type: CreatePropertyDto,
    })
    async create(
     @Body() dto: CreatePropertyDto,
     @UploadedFile() prephoto: Express.Multer.File,
     @UploadedFiles() photos: Array<Express.Multer.File>, 
    ) {
    return await this.propertyService.create(dto, prephoto, photos);
    }


    

    // @Post("photo")
    // @ApiConsumes('multipart/form-data')
    // @UseInterceptors(FileInterceptor('file'))
    // @ApiBody({
    //     description: 'File upload',
    //     schema: {
    //       type: 'object',
    //       properties: {
    //         file: {
    //           type: 'string',
    //           format: 'binary',
    //         },
    //       },
    //     },
    // })
    // async createPhoto(@UploadedFile() file: Express.Multer.File){
    //     return await this.propertyService.uploadImage(file)
    // }
}
