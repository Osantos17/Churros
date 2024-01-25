import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

class RadarMap extends React.Component {
  componentDidMount() {
    Radar.initialize(`${import.meta.env.VITE_SOME_KEY}`);

    // create a map
    const map = new Radar.ui.map({
      container: 'map',
      style: 'radar-default-v1',
      center: [-73.9911, 40.7342], // NYC
      zoom: 4,
    });

    // add a marker to the map
    Radar.ui.marker({ text: 'Location' })
      .setLngLat([-73.9910078, 40.7342465])
      .addTo(map);
  }

  render() {
    return (
      <div id="map-container" style={{ height: '100%', position: 'absolute', width: '100%' }}>
        <div id="map" style={{ height: '100%', position: 'absolute', width: '100%' }} />
      </div>
    );
  }
}

export default RadarMap;