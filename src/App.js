import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import RouterApp from './routes'
class App extends Component{
  render(){
    return(
      <div>
        <RouterApp />
      </div>
    )
  }
}

export default App;
