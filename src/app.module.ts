import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//import { Authmodule } from './auth/auth.module';
import { Usercontroller } from './user.controller';
//import { UsersService } from './user.service';
 
import { HttpModule } from '@nestjs/axios';
import { MyModule } from './mymodule';
import { simcontroller } from './simcontroller';
import { SimService } from './SimService';
//import { myFunction } from './myfunction';

@Module({
  imports: [
    HttpModule, MyModule,
  //  MongooseModule.forRoot('mongodb://localhost:27017/mynestjs'),
    //MongooseModule.forFeature([{ name: user.name, schema: userschema }]),
  ],
  controllers: [Usercontroller,simcontroller ],
  providers: [ SimService
   
  ],
 
  exports:[MyModule,SimService]
})
export class AppModule {}
