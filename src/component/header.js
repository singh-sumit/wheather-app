import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button } from "@material-ui/core";
import CitiesAPIData from "./citiesApi";
import WheatherHome from './wheather-home';


class AppHeader extends Component {
  handleChange=(event)=>{
    var key=event.keyCode || event.which;
    if (key==13){
      console.log('executed',event.target.value);
      this.props.citySetter(event.target.value);
    }
   
    // let countryArr = CitiesAPIData.getCities();
    // console.log(this.props.attribute);
    // let self=this.props.attribute;
    // this.setState(
    //   self.city = event.target.value,
    //   self.isLoading = true
    // )
  //  console.log(this.props.dataLoader());
    //console.log([event.target.value]);
  }
  render() {
    return (
      <AppBar position="static">
        <Toolbar style={{display:"flex",flexDirection :'row',justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignContent:'center', alignItems:'center'}}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              Today's Wheater
            </Typography>
          </div>
          <div style={{display: 'flex', alignContent:'center', alignItems:'center'}}>
            <div style={{}}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search City…"
              inputProps={{ 'aria-label': 'search' }}
              onKeyPress={this.handleChange}
              placeholder = 'Press Enter to Load'
            />
         
          </div>
          
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppHeader;