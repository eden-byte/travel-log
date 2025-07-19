import {useState, useEffect} from 'react';
import * as React from 'react';
import Map from 'react-map-gl/mapbox';
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import 'mapbox-gl/dist/mapbox-gl.css';
import { listLogEntries } from './Api';
import ReactMapGL, {Marker} from 'react-map-gl'




const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  
  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      setLogEntries(logEntries);
    })();
  }, []);

  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -3.7,
        latitude: 40.42,
        zoom: 3
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {
        logEntries.map(entry => {

        })
      }
      </ReactMapGL>
  );
};

export default App;