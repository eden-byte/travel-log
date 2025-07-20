import {useState, useEffect} from 'react';
import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl/mapbox'; 
import 'mapbox-gl/dist/mapbox-gl.css';

import { listLogEntries } from './Api';
import LogEntryForm from './LogEntryForm';

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({}); 
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [viewPort, setViewPort] = useState({
    longitude: -3.7,
    latitude: 40.42, 
    zoom: 4
  });

  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntries(logEntries);
  }

  useEffect(() => {
    getEntries();
  }, []);

  const showAddMarkerPopup = (event) => {
    const { lng: longitude, lat: latitude } = event.lngLat;
    setAddEntryLocation({
      latitude,
      longitude
    });
  };

  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      {...viewPort}
      onViewportChange={setViewPort}
      onDblClick={showAddMarkerPopup}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {
        logEntries.map(entry => (
          <React.Fragment key={entry._id}>
            <Marker 
              latitude={entry.latitude} 
              longitude={entry.longitude}
            >
              <div
                onClick={() => setShowPopup({
                  ...showPopup,
                  [entry._id]: true,
                })}
              >
                <svg 
                  className="marker" 
                  style={{
                    width: '24px',
                    height: '24px',
                    stroke: "black",
                    cursor: 'pointer'
                  }}
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            </Marker>
            
            {showPopup[entry._id] && (
              <Popup
                latitude={entry.latitude}
                longitude={entry.longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setShowPopup({
                  ...showPopup,
                  [entry._id]: false,
                })}
                anchor="top"
              >
                <div className="popup">
                  <h3>{entry.title}</h3>
                  <p>{entry.comments}</p>
                  <small>Visited on: {new Date(entry.visitDate).toLocaleDateString()}</small>
                  {entry.img && <im src={entry.image} alt={entry.title}/>}
                </div>
              </Popup>
            )}
          </React.Fragment>
        ))
      }
      
      {addEntryLocation && (
        <>
          <Marker 
            latitude={addEntryLocation.latitude} 
            longitude={addEntryLocation.longitude}
          >
            <div>
              <svg 
                className="marker" 
                style={{
                  width: '24px',
                  height: '24px',
                  stroke: "red", 
                  fill: "red",
                  cursor: 'pointer'
                }}
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
          </Marker>
          
          <Popup
            latitude={addEntryLocation.latitude}
            longitude={addEntryLocation.longitude}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setAddEntryLocation(null)}
            anchor="top"
          >
            <div className="popup">
              <LogEntryForm onClose={() => {
                setAddEntryLocation(null);
                getEntries();
              }} location={addEntryLocation}/>
            </div>
          </Popup>
        </>
      )}
    </Map>
  );
}

export default App;