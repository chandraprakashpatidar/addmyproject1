import { Injectable } from "@nestjs/common";
import axios from "axios";
@Injectable()
export class SimService
{
    async singlesimactive(Simnumber: string, apikey: string, simactivedata: any, MokeRes: any) {
        if (MokeRes === 'false') {
          try {
            console.log(Simnumber);
            const url = `https://dashboard.hologram.io/api/1/links/cellular/sim_${Simnumber}/claim?apikey=${apikey}`;
            console.log(url);
            const response = await axios.post(url, simactivedata);
            console.log(response.data.data, 'Nest.js');
            return response.data;
          } catch (error) {
            console.error(error);
            throw error;
          }
        } else {
          try {
            const url = `https://private-anon-0840ce5b7e-hologram.apiary-mock.com/api/1/links/cellular/sim_ICCID/claim`;
            console.log(url);
            const response = await axios.post(url, simactivedata);
            console.log(response.data, 'Nest.js');
            return response.data;
          } catch (error) {
            console.error(error);
            throw error;
          }
        }
      }
async multisimactive(apikey:string,simactivedata:any,MokeRes:any)
{
   
    if(MokeRes==='false')
    {
try {
    
}
 catch (error)
  {
    console.error(error);
    throw error;  
}
    }
    else
    {
        
try 
{
 const url ='https://private-anon-0840ce5b7e-hologram.apiary-mock.com/api/1/links/cellular/bulkclaim'  
 console.log(url,"sss")
 const response = await axios.post(url,simactivedata);
 console.log(response.data, 'Nest.js');
 return response.data 
} catch (error)
 {
    console.error(error);
    throw error;
    
}
    }
}




}