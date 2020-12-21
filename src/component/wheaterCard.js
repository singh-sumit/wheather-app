import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnySharpIcon from "@material-ui/icons/WbSunnySharp";
import WbCloudyIcon from "@material-ui/icons/WbCloudy";
import ExploreIcon from "@material-ui/icons/Explore";
import GrainIcon from '@material-ui/icons/Grain';
import VisibilityIcon from '@material-ui/icons/Visibility';

class WheaterCard extends Component {
  getCurrentDateTime = () => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let date = new Date();
    return (
      date.toLocaleTimeString() +
      " , " +
      months[date.getMonth()] +
      " " +
      date.getDate()
    );
  };
  render() {
    let wheater = this.props.data;
    return (
      <Card style={{ margin: "30px auto", maxWidth: "50%" }}>
        <CardContent>
          <Typography
            color="textPrimary"
            variant="button"
            style={{ color: "salmon", fontWeight: "bold" }}
          >
            {this.getCurrentDateTime()}
          </Typography>
          <Typography color="textSecondary" variant="h5" gutterBottom>
            {wheater.name} &nbsp; {wheater.sys.country}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Typography
              variant="h6"
              component="h2"
              color="textSecondary"
              style={{ marginRight: 30 }}
            >
              <WbSunnySharpIcon
                fontSize="large"
                style={{ color: "yellow", marginRight: 5 }}
              />
              SunRise:
              <br />
              {new Date(wheater.sys.sunrise).toLocaleTimeString()}
            </Typography>
            <Typography variant="h6" component="h2" color="textSecondary">
              <NightsStayIcon
                fontSize="large"
                style={{ color: "black", marginRight: 5 }}
              />
              SunSet:
              <br />
              {new Date(wheater.sys.sunset).toLocaleTimeString()}
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <WbCloudyIcon fontSize="large" style={{ color: "skyblue" }} />
              <Typography style={{ marginLeft: 20 }} variant="h3">
                {wheater.main.temp} <sup>o</sup>C
              </Typography>
            </div>
          </div>
          <Divider />
          <div>
            <Typography variant="button" style={{ fontWeight: "bold" }}>
              Feels Like {wheater.main.feels_like} <sup>o</sup>C ,
              {wheater.weather[0].description}
            </Typography>
          </div>
          <div style={{display: "flex" , justifyContent: 'space-around'}}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ExploreIcon fontSize="small" />
            <Typography style={{ marginLeft: 5 }} variant="h7">
              {wheater.main.pressure} hPA
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <GrainIcon fontSize="small" />
            <Typography style={{ marginLeft: 5 }} variant="h7">
                Humidity :{wheater.main.humidity} %
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <VisibilityIcon fontSize="small" />
            <Typography style={{ marginLeft: 5 }} variant="h7">
                Visibility :{wheater.visibility} meters
            </Typography>
          </div>

          </div>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default WheaterCard;
