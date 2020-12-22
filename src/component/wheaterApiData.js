import axios from 'axios';
import {CONFIG} from './config'

export default class WheatherAPILoader{
    static async getCurrentWheater(city){
        let url=CONFIG.API_URL.replace('city name',city);
        let cors="https://cors-anywhere.herokuapp.com/";
        return await axios.get(cors+url+CONFIG.API_KEY);
    }
}
