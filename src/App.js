import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import GeneralMaps from "./Components/GeneralMaps";
import CircleMaps from "./Components/CircleMaps";
import MarkerMaps from "./Components/MarkerMaps";
import './App.css';
import './Components/maps.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navClass">
            <ul>
              <li key="generalmapskey">
                <Link to="/">General Maps</Link>
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
              <Route exact path="/">
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
    );
  }
}

export default App;
