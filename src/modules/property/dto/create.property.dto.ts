import { ApiProperty } from "@nestjs/swagger";

export class CreatePropertyDto {
    @ApiProperty({example:'type'})
    type: string;
    
    @ApiProperty()
    area: string;
    
    @ApiProperty({ 
        type: 'string', 
        format: 'binary', 
        description: 'Prephoto image file' 
    })
    prephoto: string;
     
    @ApiProperty({
        type: 'array',
        items: {
          type: 'string',
          format: 'binary',
        },
        description: 'Array of photo files',
    })
    photos: string[];
     
    @ApiProperty()
    rooms: number;
    
    @ApiProperty()
    square: number;
    
    @ApiProperty()
    price: number;
    
    @ApiProperty()
    series: string;
    
    @ApiProperty()
    apartmenttype: string;
    
    @ApiProperty()
    views: number;
    
    @ApiProperty()
    favorites: string;
    
    @ApiProperty()
    floor: number;
    
    // @ApiProperty()
    // security: string[];
    
    // @ApiProperty()
    // others: string[];
    
    // @ApiProperty()
    // documents: string[];
    
    @ApiProperty()
    city: string;
    
    @ApiProperty()
    addres: string;
     
    @ApiProperty()
    finishing: string;
    
    @ApiProperty()
    wallstype: string;
    
    @ApiProperty()
    longitude: number;
    
    @ApiProperty()
    latitude: number;
}