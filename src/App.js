import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import GeneralMaps from "./Components/GeneralMaps";
import CircleMaps from "./Components/CircleMaps";
import MarkerMaps from "./Components/MarkerMaps";
import ChartWrapper from './Components/charts/d3charts/ChartWrapper';
import BarChartWrapper from './Components/charts/d3charts/BarChartWrapper';
import Navbar from 'react-bootstrap/Navbar';

import './App.scss';
import './Components/styles.scss';


import Popup from './Components/popup/popup';

class App extends Component {

  state={
    popupview: false
  }

  popupFn = (evt)=>{
    let popupToggle = !this.state.popupview;
    this.setState({
      popupview: popupToggle
    })
  }
  render() {
    return (
      <React.Fragment>
      <Navbar bg="light">
        <Navbar.Brand>Pradeep Kumar's Work Showcase</Navbar.Brand>
          <div className="rightDiv"><div className="aboutme" onClick={this.popupFn}>About Me</div></div>
      </Navbar>
      <Router>
        <div>
          <nav className="navClass">
            <ul>
              <li key="myworks"><h3>My Works</h3></li>
              <li key="d3key">
                <Link to="/d3simplechart">D3 SVG Chart</Link>
              </li>
              <li key="d3key">
                <Link to="/d3barchart">D3 Bar Chart</Link>
              </li>
              <li key="generalmapskey">
                <Link to="/generalmaps">General Maps</Link>
              </li>
              <li key="markermapskey">
                <Link to="/markermaps">Marker Maps</Link>
              </li>
              <li key="circlemapskey">
                <Link to="/circlemaps">Circle Maps</Link>
              </li>
              
            </ul>
          </nav>
          <div className="mapsDiv">
            <Switch>
              <Route exact path="/d3simplechart">
                <ChartWrapper />
              </Route>
              <Route exact path="/d3barchart">
                <BarChartWrapper />
              </Route>
              <Route exact path="/generalmaps">
                <GeneralMaps />
              </Route>
              <Route exact path="/markermaps">
                <MarkerMaps />
              </Route>
              <Route exact path="/circlemaps">
                <CircleMaps />
              </Route>
              
            </Switch>
          </div>
        </div>
        
      </Router>
      {
        this.state.popupview ? <Popup passref = {this.popupFn} /> : null
      }
      
      </React.Fragment>
    );
  }
}

export default App;
