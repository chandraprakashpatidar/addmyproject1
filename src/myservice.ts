import { Injectable, Module } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MyService {
  async myserver() {
    try {
      const deviceId = 51736;
      const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
      const url = `https://dashboard.hologram.io/api/1/devices/names?orgid=${deviceId}&apikey=${apiKey}`;

      const response = await axios.get(url);
     // console.log(response.data, 'Nest.js');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }



  async orgByid(id: string, apikey: string,lastRecordOnly:string,limit:any) 
  {
    console.log(lastRecordOnly)
if(lastRecordOnly==='false')
{
  try {
    console.log("data")
    //  const id = 51736;
      //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
     // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
    // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
    const url = `https://dashboard.hologram.io/api/1/devices/?orgid=${id}?&apikey=${apikey}&limit=${limit}`
     console.log(url)

      const response = await axios.get(url);
    //  console.log(response.data, 'Nest.js');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
  }
}
else
{
  try {
    console.log("moke")
    //  const id = 51736;
      //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
     // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
    // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
    const url = `https://private-anon-a5be725b26-hologram.apiary-mock.com/api/1/devices/1234`
     console.log(url)
      const response = await axios.get(url);
      console.log(response.data, 'Nest.js');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
}
  }


  async getDeviceByName(id:string,apikey:string,lastRecordOnly:string,limit:any)
  {
    console.log(lastRecordOnly,"kk")
    if(lastRecordOnly=='false')
    {
      try {
        //  const id = 51736;
          //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
         // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
        // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
        const url = `https://dashboard.hologram.io/api/1/devices/names?orgid=${id}?&apikey=${apikey}&limit=${limit}`
         console.log(url)
    
          const response = await axios.get(url);
          console.log(response.data, 'Nest.js');
          return response.data;
        } catch (error) {
          console.error(error);
          throw error;
      }
    }
    else
    {
      try {
        //  const id = 51736;
          //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
         // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
        // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
        const url = `https://private-anon-a5be725b26-hologram.apiary-mock.com/api/1/devices/names`
         console.log(url)
          const response = await axios.get(url);
          console.log(response.data, 'Nest.js');
          return response.data;
        } catch (error) {
          console.error(error);
          throw error;
        }
    }
  }

async getDeviceid(id:string,apikey:string,lastRecordOnly:any,limit:any)
{
  if(lastRecordOnly=='false')
  {
    try {
      //  const id = 51736;
        //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
       // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
      // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
      const url = `https://dashboard.hologram.io/api/1/devices/${id}?&apikey=${apikey}&limit=${limit}`
       console.log(url)
  
        const response = await axios.get(url);
        console.log(response.data, 'Nest.js');
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
    }
  }
  else
  {
    try {
      //  const id = 51736;
        //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
       // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
      // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
      const url = `https://private-anon-a5be725b26-hologram.apiary-mock.com/api/1/devices/1234`
       console.log(url)
        const response = await axios.get(url);
        console.log(response.data, 'Nest.js');
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
  } 
}


async getdevicelocationByordid(id:string,apikey:string,lastRecordOnly:string,limit:any)
{
  if(lastRecordOnly=='false')
  {
    try {
      //  const id = 51736;
        //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
       // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
      // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
      const url = `https://dashboard.hologram.io/api/1/devices/locations?orgid=${id}?&apikey=${apikey}&limit=${limit}`
       console.log(url)
        const response = await axios.get(url);
        console.log(response.data, 'Nest.js');
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
    }
  }
  else
  {
    try {
      //  const id = 51736;
        //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
       // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
      // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
      const url = `https://private-anon-a5be725b26-hologram.apiary-mock.com/api/1/devices/locations`
       console.log(url)
        const response = await axios.get(url);
        console.log(response.data, 'Nest.js');
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
    }
  } 
}


async Devicepauseandunpause(id: string, datadetails: any,apikey:string,lastRecordOnly:string,limit:any)
{
  if(lastRecordOnly=='false')
  {
    try {
      console.log("plz url insert")
      //  const id = 51736;
        //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
       // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
      // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
     // const url = `https://dashboard.hologram.io/api/1/devices/locations?orgid=${id}?&apikey=${apikey}`
      // console.log(url)
      //  const response = await axios.post(url,datadetails);
       // console.log(response.data, 'Nest.js');
        return //response.data;
      } catch (error) {
        console.error(error);
        throw error;
    }
  }
  else
  {
    try {
      //  const id = 51736;
        //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
       // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
      // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
      const url = `https://private-anon-a5be725b26-hologram.apiary-mock.com/api/1/devices/1234/state?&limit=${limit}`
       console.log(url)
        const response = await axios.post(url,datadetails);
        console.log(response.data, 'Nest.js');
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
    }
  }  
}

async DeviceUpdate(id:string,updatadetails,apikey:string,lastRecordOnly:string,limit:any)
{
  if(lastRecordOnly=='false')
  {
    try {
      console.log("plz url insert")
      //  const id = 51736;
        //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
       // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
      // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
     // const url = `https://dashboard.hologram.io/api/1/devices/locations?orgid=${id}?&apikey=${apikey}`
      // console.log(url)
      //  const response = await axios.post(url,datadetails);
       // console.log(response.data, 'Nest.js');
        return //response.data;
      } catch (error) {
        console.error(error);
        throw error;
    }
  }
  else
  {
    try {
      //  const id = 51736;
        //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
       // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
      // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
      const url = `https://private-anon-a5be725b26-hologram.apiary-mock.com/api/1/devices/1234?orgid=4321`
       console.log(url)
        const response = await axios.put(url,updatadetails);
        console.log(response.data, 'Nest.js');
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
    }
  }  

}

async DeviceChangPlan(id:string,DevicechangplanDTO,apikey:string,lastRecordOnly:string)
{
  if(lastRecordOnly=='false')
  {
    try {
      console.log("plz url insert")
      //  const id = 51736;
        //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
       // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
      // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
     // const url = `https://dashboard.hologram.io/api/1/devices/locations?orgid=${id}?&apikey=${apikey}`
      // console.log(url)
      //  const response = await axios.post(url,datadetails);
       // console.log(response.data, 'Nest.js');
        return //response.data;
      } catch (error) {
        console.error(error);
        throw error;
    }
  }
  else
  {
    try {
      //  const id = 51736;
        //const apiKey = '5vQxeW6vRcjNotTukTc3MoMOB2ZLmb';
       // const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
      // const url ='https://dashboard.hologram.io/api/1/devices/names?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb' 
      const url = `https://private-anon-a5be725b26-hologram.apiary-mock.com/api/1/devices/1234/changeplan`
       console.log(url)
        const response = await axios.post(url,DevicechangplanDTO);
        console.log(response.data, 'Nest.js');
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
    }
  }
}


}



@Module({
  providers: [MyService],
  exports: [MyService],
})
export class myservice {}

