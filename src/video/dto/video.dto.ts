import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class VideoDto {
    @ApiProperty()
    video_name: string;

    @ApiProperty()
    thumbnail: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    @IsNumber({}, {message: 'The value must be a valid number.'})
    views: number;

    @ApiProperty()
    source: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @ApiProperty()
    @IsNotEmpty()
    type_id: number;
}