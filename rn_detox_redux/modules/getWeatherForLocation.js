import { OWM_API_KEY, OWM_API_URL } from "@env"
import axios from "axios";
const getWeatherForLocation = async options => {
  console.log(OWM_API_URL)
  let response = await axios.get(OWM_API_URL + '/onecall',
    {params: {
      lat: options.latitude,
      lon: options.longitude,
      units: 'metric',
      appid: OWM_API_KEY
    }} )
  return response.data
}


export default getWeatherForLocation