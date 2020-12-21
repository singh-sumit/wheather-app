import { CircularProgress } from '@material-ui/core';
import React,{Component} from 'react';
import AppHeader from './header';
import WheatherAPILoader from './wheaterApiData';
import WheatherCard from './wheaterCard';


class WheatherHome extends Component{
    constructor(props){
        super(props);
        this.state={
            city : 'kathmandu',
            wheatherData : {},
            isLoading : true
        }
    }
    setCity=(name)=>{
        console.log(name)
        this.setState({
            city : name,
            isLoading : true,
            wheatherData :{}
        });
        this.getWheaterData();
    }
    componentDidMount(){
        this.getWheaterData();
        console.log(this.state.wheatherData);
        console.log('arribe');
    }

    getWheaterData=()=>{
        let self=this;
        WheatherAPILoader.getCurrentWheater(self.state.city).then(function(resp){
            console.log(resp.data);
            self.setState({
                wheatherData : resp.data,
                isLoading : false
            })
        }).catch(function(error){
            console.log(error);
        })
    }
    render(){
        return(
            <div>
              <AppHeader citySetter={this.setCity} />

              {
                this.state.isLoading ? <CircularProgress  style={{margin: 200}}/> : 
                <WheatherCard data={this.state.wheatherData} />
              }
            </div>
        )
    }
}

export default WheatherHome;