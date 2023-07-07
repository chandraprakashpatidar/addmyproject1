

import axios from 'axios';

export async function deviceid(id: string) {
  try {
    const url = `https://dashboard.hologram.io/api/1/devices/locations?orgid=${id}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
    console.log(url);

    const response = await axios.get(url);
    console.log(response.data, 'Nest.js');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
