import { Controller,Post,Body,Get ,Res,HttpStatus, HttpCode ,Patch,Param,Delete, UseGuards,Req,Query,Put} from '@nestjs/common';
//import { UsersService } from './user.service';
import { ApiTags, ApiResponse, ApiOperation ,ApiParam,ApiQuery} from '@nestjs/swagger';
import { MyService } from './myservice';
import axios from 'axios';
import { DeviceStateDTO } from './Dto/datrapause';
import { DeviceupdateDTO } from './Dto/updatedevice';
import { DevicechangplanDTO } from './Dto/changplan';
//import { Pagination } from 'nestjs-typeorm-paginate';
import { DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
@Controller("HologramController/api/v1")
@ApiTags('HologramController')
export class Usercontroller{
   
  constructor(private readonly myService: MyService) {}

  @Get()
  @ApiOperation({ summary: 'Get my data' })
  @ApiResponse({ status: 200, description: 'Success', type: Object })
  async getMyData() {
    try {
      const responseData = await this.myService.myserver();
      return { message: 'data found succefully!', data: responseData };
    } catch (error) {
      console.error(error);
      throw error;
    }

  }

  @Get(':id')
  @ApiOperation({ summary: 'Get org by ID' })
  @ApiParam({ name: 'id', description: 'Device ID' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiQuery({ name: 'MockResponseonly', required: false, type: Boolean })
 // @ApiQuery({ name: 'page', required: false, explode: false, type: Number, isArray: false })
  @ApiQuery({ name: 'limit', required: false, explode: false, type: Number, isArray: false })
  async getOrgById(@Param('id') id: string,@Query('apikey') apikey:string,  @Query() query: { [key: string]: string },
  @Query('limit', new DefaultValuePipe(1000), ParseIntPipe) limit: number = 1000) {
    try {
      console.log(id,"id");
      const lastRecordOnly: boolean | string = query.MockResponseonly;
      console.log(lastRecordOnly,"kk")
      console.log(apikey,"apikey")
     // console.log(page)
      console.log(limit)
      const responseData = await this.myService.orgByid(id,apikey,lastRecordOnly,limit);
      return { message: 'data found succefully!', data: responseData };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }




  @Get(':id/name')
  @ApiOperation({ summary: 'Get devicename by orgID' })
  @ApiParam({ name: 'id', description: 'org ID' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiQuery({ name: 'MockResponseonly', required: false, type: Boolean })
  @ApiQuery({ name: 'limit', required: false, explode: false, type: Number, isArray: false })
  async getDeviceByName(@Param('id') id: string,@Query('apikey') apikey:string,@Query() query: { [key: string]: string },@Query('limit', new DefaultValuePipe(1000), ParseIntPipe) limit: number = 1000) {
    try {
      console.log(id);
      const lastRecordOnly: boolean | string = query.MockResponseonly;
      const responseData = await this.myService.getDeviceByName(id,apikey,lastRecordOnly,limit);
      return { message: 'data found succefully!', data: responseData };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Get(':id/deivceid')
  @ApiOperation({ summary: 'Get device by ID' })
  @ApiParam({ name: 'id', description: 'Device ID' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiQuery({ name: 'MockResponseonly', required: false, type: Boolean })
  @ApiQuery({ name: 'limit', required: false, explode: false, type: Number, isArray: false })
  async getDeviceid(@Param('id') id: string,@Query('apikey') apikey:string,@Query() query: { [key: string]: string },@Query('limit', new DefaultValuePipe(1000), ParseIntPipe) limit: number = 1000) {
    try {
      console.log(id);
      const lastRecordOnly: boolean | string = query.MockResponseonly;
      const responseData = await this.myService.getDeviceid(id ,apikey,lastRecordOnly,limit);
      return { message: 'data found succefully!', data: responseData };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  @Get(':id/deviceLoction')
  @ApiOperation({ summary: 'Get devicelocations by orgID' })
  @ApiParam({ name: 'id', description: 'Device ID' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiQuery({ name: 'MockResponseonly', required: false, type: Boolean })
  @ApiQuery({ name: 'limit', required: false, explode: false, type: Number, isArray: false })
  async getdevicelocationByordid(@Param('id') id: string,@Query('apikey') apikey:string,@Query() query: { [key: string]: string },@Query('limit', new DefaultValuePipe(1000), ParseIntPipe) limit: number = 1000) {
    try {
      console.log(id);
      const lastRecordOnly: boolean | string = query.MockResponseonly;
      const responseData = await this.myService.getdevicelocationByordid(id,apikey,lastRecordOnly,limit);
      return { message: 'data found succefully!', data: responseData };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


  @Post(':id/state')
  @ApiOperation({ summary: 'Pause or Unpause Device Data by device id' })
  @ApiResponse({ status: 200, description: 'Device state updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiQuery({ name: 'MockResponseonly', required: false, type: Boolean })
  @ApiQuery({ name: 'limit', required: false, explode: false, type: Number, isArray: false })
  async Devicepauseandunpause(
    @Param('id') id: string,
    //@Query('limist') limits:string,
    @Body() datadetails: DeviceStateDTO,@Query('apikey') apikey:string,@Query() query: { [key: string]: string },@Query('limit', new DefaultValuePipe(1000), ParseIntPipe) limit: number = 1000)
  : Promise<any> {
    try {
      console.log(id, 'deviceid');
      console.log(datadetails, "data");
      const lastRecordOnly: boolean | string = query.MockResponseonly;
      const device = await this.myService.Devicepauseandunpause(id,datadetails,apikey,lastRecordOnly,limit);
      return {
        message: 'Device state updated successfully',
        data: device,
      };
    } catch (error) {
      console.error(error);
      throw error
    }
  }


  @Put(':id/update')
  @ApiOperation({ summary: 'update Device Data by orgByid' })
  @ApiResponse({ status: 200, description: 'Device state updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiQuery({ name: 'MockResponseonly', required: false, type: Boolean })
  @ApiQuery({ name: 'limit', required: false, explode: false, type: Number, isArray: false })
  async DeviceUpdate(
    @Param('id') id: string,
    //@Query('limist') limits:string,
    @Body() updatadetails: DeviceupdateDTO,@Query('apikey') apikey:string,@Query() query: { [key: string]: string }
    ,@Query('limit', new DefaultValuePipe(1000), ParseIntPipe) limit: number = 1000): Promise<any> {
    try {
      console.log(id, 'deviceid');
      //console.log(datadetails, "data");
      const lastRecordOnly: boolean | string = query.MockResponseonly;
      const device = await this.myService.DeviceUpdate(id,updatadetails,apikey,lastRecordOnly,limit);
      return {
        message: 'Device state updated successfully',
        data: device,
      };
    } catch (error) {
      console.error(error);
      throw error
    }
  }

  

  @Post(':id/changeplan')
  @ApiOperation({ summary: 'changplan Device Data by orgByid' })
  @ApiResponse({ status: 200, description: 'Device state updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiQuery({ name: 'MockResponseonly', required: false, type: Boolean })
  async DeviceChangPlan(
    @Param('id') id: string,
    //@Query('limist') limits:string,
    @Body() DevicechangplanDTO: DevicechangplanDTO,@Query('apikey') apikey:string,@Query() query: { [key: string]: string }
  ): Promise<any> {
    try {
      console.log(id, 'deviceid');
      //console.log(datadetails, "data");
      const lastRecordOnly: boolean | string = query.MockResponseonly;
      const device = await this.myService.DeviceChangPlan(id,DevicechangplanDTO,apikey,lastRecordOnly);
      return {
        message: 'Device state updated successfully',
        data: device,
      };
    } catch (error) {
      console.error(error);
      throw error
    }
  }
  @Post(':id/casd')
  async singlesimactive(
    @Param('id') id: string,
    @Query('apikey') apikey: string,
    @Query() query: { [key: string]: string },
    //@Body() simactivedata: SingleSimactiveDTO,
  ) {
    console.log(id);
  }



}