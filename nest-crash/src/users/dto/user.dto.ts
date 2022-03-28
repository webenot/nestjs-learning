import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsAlphanumeric, IsNumber, MaxLength } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(100)
  name: string;

  @ApiPropertyOptional()
  @IsNumber()
  age?: number;
}
