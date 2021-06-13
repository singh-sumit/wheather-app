import axios from 'axios';
import {CONFIG} from './config'

export default class WheatherAPILoader{
    static async getCurrentWheater(city){
        let url=CONFIG.API_URL.replace('city name',city);
        return await axios.get(url+CONFIG.API_KEY);
    }
}
