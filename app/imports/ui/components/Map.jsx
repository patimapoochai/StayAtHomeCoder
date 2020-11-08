import React, { Component } from 'react';
import { GoogleMap, HeatmapLayer, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 21.299950,
  lng: -157.818144
};

class Map extends Component {
  render() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyD0hk57FliftNChA2kE3m13tqBhKPuMZvY"
        >
          <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
          >
          {/*  can't put HeatmapLayer here */}
          </GoogleMap>
        </LoadScript>
    )
  }
}

export default Map;
