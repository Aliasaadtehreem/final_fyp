import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import LocationDisplay from '../Locations/Locationdisplay';
const Locationpage = () => {
     const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
         setError(null);
      },
      (err) => {
        setError(err.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
            
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);
  return (
    <>
      <div >
         <h2 style={{color:"#AF3E3E" ,paddingLeft:"350px",fontSize:"35px"}}> Live Location Tracking</h2>
         {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <LocationDisplay lat={location.lat} lng={location.lng} />
      )}
      </div>
    </>
  )
}

export default Locationpage
