import axios from "axios"

const API_KEY = 'DEMO_KEY'
const URL = 'https://api.nasa.gov/mars-photos/api/v1'

export default async function getNasaData(marsName, sol, camera) {
  try {
    const res = await axios.get(`${URL}/rovers/${marsName}/photos`, 
  {
    params: {
      sol,
      camera,
      api_key: API_KEY
    }
  });
  
  console.log('hello');

  return res.data;
  } catch (e) {
    console.error(e.message);
  }
}
