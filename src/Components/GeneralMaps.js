import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class GeneralMaps extends Component {

    state = {
        mapStyles: {
            width: '72.7vw',
            height: '80vh',
            position: 'relative !important'
        }
    }

  componentDidMount(){
      console.log("Will call after Render ");
  }
    
  render() {
    return (
      <>
        <div className="mapsTitle">General Maps</div>
        <div className="drawMaps">
          <Map
            google={this.props.google}
            zoom={8}
            style={this.state.mapStyles}
            initialCenter={{ lat: 12.68, lng: 78.27 }}
          />
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCmjp6tqeUtnNxiqBN8SgonoCkhWLmsekc'
})(GeneralMaps);
