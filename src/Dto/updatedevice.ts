import { ApiProperty } from '@nestjs/swagger';

export class DeviceupdateDTO {
  @ApiProperty({ example: 'update', description: 'update of the device name' })
  name: string;


  @ApiProperty({ example: 'update', description: 'update of the device orgid' })
  orgid: string;

  @ApiProperty({ example: 'update', description: 'update of the device tunnelable' })
  tunnelable: string;
}
