import { ApiProperty } from '@nestjs/swagger';

export class SingleSimactiveDTO {
  @ApiProperty({ example: 'active', description: 'active sim ' })
  plan: Number;

  @ApiProperty({ example: 'Zone', description: 'active sim ' })
  zone: String;
  @ApiProperty({ example: 'orgid', description: 'active sim ' })
  orgid: Number;
  @ApiProperty({ example: 'tagid', description: 'active sim ' })
  tagid: Number;
  @ApiProperty({ example: 'overange_limit', description: 'active sim ' })
  overang_limit: Number;
}
