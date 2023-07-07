import { ApiProperty } from '@nestjs/swagger';

export class DevicechangplanDTO {
  @ApiProperty({ example: 'update', description: 'update of the device name' })
  plainid: string;


  @ApiProperty({ example: 'update', description: 'update of the device zone' })
  zone: string;

  @ApiProperty({ example: 'update', description: 'update of the device orgid' })
  orgid: string;
  @ApiProperty({ example: 'update', description: 'update of the device overage_limit' })
  overage_limit: string;
  @ApiProperty({ example: 'update', description: 'update of the device  threshold' })
  threshold: string;
  @ApiProperty({ example: 'update', description: 'update of the device smslimit' })
  smslimit: string;
  @ApiProperty({ example: 'update', description: 'update of the device useacctbalance' })
  useacctbalance: string;
}