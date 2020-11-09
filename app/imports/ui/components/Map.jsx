import React, { Component} from 'react';
import { GoogleMap, HeatmapLayer, LoadScript } from '@react-google-maps/api';
import { Button } from 'semantic-ui-react';

const containerStyle = {
  width: '800px',
  height: '400px'
};

const center = {
  lat: 21.299950,
  lng: -157.818144
};

let map, heatmap;

class Map extends Component {
  // thanks, https://stackoverflow.com/questions/48493960/using-google-map-in-react-component
  getGoogleMaps() {
    // If we haven't already defined the promise, define it
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        // Add a global handler for when the API finishes loading
        window.resolveGoogleMapsPromise = () => {
          // Resolve the promise
          resolve(google);

          // Tidy up
          delete window.resolveGoogleMapsPromise;
        };

        // Load the Google Maps API
        const script = document.createElement("script");
        const API = 'AIzaSyD0hk57FliftNChA2kE3m13tqBhKPuMZvY';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&libraries=visualization&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      });
    }

    // Return a promise for the Google Maps API
    return this.googleMapsPromise;
  }

  componentWillMount() {
    // Start Google Maps API loading since we know we'll soon need it
    this.getGoogleMaps();
  }

  componentDidMount() {
    // Once the Google Maps API has finished loading, initialize the map
    this.getGoogleMaps().then((google) => {
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: center,
        mapTypeId: "roadmap",
      });
      heatmap = new google.maps.visualization.HeatmapLayer({
        data: this.getPoints(),
        map: map,
      });
      heatmap.setMap(map);
    });
  }

  getPoints() {
    return [
      { location: new google.maps.LatLng(21.300530, -157.816157), weight: 28328 },    // Hamilton Library 21.300530,-157.816157
      { location: new google.maps.LatLng(21.298374, -157.818973), weight: 42541 },    // Campus Center 21.298374,-157.818973
      { location: new google.maps.LatLng(21.297439, -157.816314), weight: 25905 },    // POST Building 21.297439,-157.816314
    ];
  }

  render() {
    return (
        <div>
          <Button
          >
            Heatmap
          </Button>
          <div id="map" style={containerStyle}></div>
        </div>
    )
  }
}

export default Map;
