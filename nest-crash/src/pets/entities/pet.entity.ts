import { ApiProperty } from '@nestjs/swagger';

export class Pet {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
