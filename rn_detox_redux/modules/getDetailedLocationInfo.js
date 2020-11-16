import { OC_API_KEY, OC_API_URL } from "@env"
import axios from "axios";
const getDetailedLocationInfo = async options => {
  console.log(OC_API_URL)
  let response = await axios.get(OC_API_URL + '/geocode/v1/json',
    {params: {
      q: encodeURI(`${options.latitude},${options.longitude}`),
      key: OC_API_KEY
    }} )
  return response.data.results[0].components
}


export default getDetailedLocationInfo