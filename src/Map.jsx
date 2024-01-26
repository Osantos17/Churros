import React from 'react';
import Radar from 'radar-sdk-js';
import './Map.css'

import 'radar-sdk-js/dist/radar.css';

class RadarMap extends React.Component {
  componentDidMount() {
    Radar.initialize(`${import.meta.env.VITE_SOME_KEY}`);

    const map = new Radar.ui.map({
      container: 'map',
      style: 'radar-light-v1',
      center: [-73.9911, 40.7342],
      zoom: 4,
    });

    Radar.ui.marker({ text: 'Location' })
      .setLngLat([-73.9910078, 40.7342465])
      .addTo(map);
      
      Radar.ui.marker({ text: 'Location2' })
      .setLngLat([-71.9910078, 40.7342465])
      .addTo(map);

      Radar.ui.marker({ text: 'Location2' })
      .setLngLat([-70.9910078, 40.7342465])
      .addTo(map);

  }

  render() {
    return (
      <div id="map-container" style={{ height: '300px', position: 'absolute', width: '100%' }}>
        <div id="map" style={{ height: '100%', position: 'absolute', width: '100%' }} />
      </div>
    );
  }
}

export default RadarMap;