import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @ApiProperty({
      description: 'имя пользователя',
      example: "Akniet"
    })
    name: string;
    
    @ApiProperty({
      description: 'имя пользователя',
      example: "Kuluev"
    })
    @IsString()
    lastname: string;

    @ApiProperty({
      description: 'имя пользователя',
      example: "+996703996873"
    })
    @IsString()
    phone: string

    @ApiProperty({
      description: 'пароль пользователя',
      example: "ыва9рол"
    })
    @IsString()
    password: string
}