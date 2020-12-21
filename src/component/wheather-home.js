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
    onSearchLoad(){
        this.getWheaterData();
    }
    render(){
        return(
            <div>
              <AppHeader attribute={this.state} dataLoader={this.onSearchLoad}/>

              {
                this.state.isLoading ? <CircularProgress  style={{margin: 200}}/> : 
                <WheatherCard data={this.state.wheatherData} />
              }
            </div>
        )
    }
}

export default WheatherHome;