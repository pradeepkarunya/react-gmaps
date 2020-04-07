import React, { Component } from "react";
import CMap from './CMaps';

class CircleMaps extends Component {
    state = {
        data:[
            {
              id: 1,
              name: "Park Slope",
              latitude: "40.6710729",
              longitude: "-73.9988001",
              circle: {
                radius: 3000,
                options: {
                strokeColor: "#ff0000"
              }    
            }
            },
            {
              id: 2,
              name: "Bushwick",
              latitude: "40.6942861",
              longitude: "-73.9389312"
            },
            {
              id: 3,
              name: "East New York",
              latitude: "40.6577799",
              longitude: "-73.9147716"
            }
        ]
    };

  render() {
    return (
      <>
        <div className="mapsTitle">Circle Maps</div>
        <div className="drawMaps">
        
        <CMap
            center={{ lat: 40.64, lng: -73.96 }}
            zoom={12}
            places={this.state.data}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmjp6tqeUtnNxiqBN8SgonoCkhWLmsekc"
            loadingElement={<div style={{ height: `85%` }} />}
            containerElement={<div style={{ height: `630px` }} />}
            mapElement={<div style={{ height: `80%` }} />}
        />
        
        </div>
      </>
    );
  }
}

export default CircleMaps;
