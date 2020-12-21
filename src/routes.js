import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WheatherHome from "./component/wheather-home";

class RouterApp extends Component {
  render() {
    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <WheatherHome />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default RouterApp;
