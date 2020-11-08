/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import {
  GoogleMap,
  HeatmapLayer
} from '@react-google-maps/api'

const center = {
  lat: 37.774546,
  lng: -122.433523
}

const onClick = (...args) => {
  console.log('onClick args: ', args)
}

const ExampleHeatmap = ({ styles }) => (
    <div className='map'>
      <div className='map-container'>
        <GoogleMap
            id='heatmap-example'
            mapContainerStyle={styles.container}
            zoom={13}
            center={center}
            onClick={onClick}
        >
          <HeatmapLayer data={[
            new google.maps.LatLng(37.782, -122.447),
          ]} />
        </GoogleMap>
      </div>
    </div>
)

export default React.memo(ExampleHeatmap)
