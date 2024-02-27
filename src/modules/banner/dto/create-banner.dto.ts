import { ApiProperty } from "@nestjs/swagger";

export class CreateBannerDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    subtitle: string;

    @ApiProperty(
        { 
          type: 'string', 
          format: 'binary', 
          description: 'video file' 
        }
    )
    video: string
} 