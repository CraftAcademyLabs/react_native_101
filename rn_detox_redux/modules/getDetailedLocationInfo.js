import { OC_API_KEY, OC_API_URL } from "@env"
import axios from "axios";
const getDetailedLocationInfo = async options => {
  console.log(OC_API_URL)
  let response = await axios.get(OC_API_URL + '/geocode/v1/json',
    {params: {
      q: encodeURI(`${options.latitude},${options.longitude}`),
      key: OC_API_KEY
    }} )
  debugger
  // the interesting part here is to figure out what the 'components' object look like so we know what to display on the screen
  
  let attributes = Object.keys(response.data.results[0].components)

  return response.data.results[0].components
}


export default getDetailedLocationInfo