import axios from "axios";
import React,{Component} from 'react';
import {CONFIG} from './config'

class CitiesAPIData extends Component{
    static async getCities(){
        await axios.get(CONFIG.CITIES_URL).then(function (response) {
            console.log(response.data);
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });
    } 
}

export default CitiesAPIData;