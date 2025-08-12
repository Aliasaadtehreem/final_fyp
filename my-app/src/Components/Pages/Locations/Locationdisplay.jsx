import React from 'react'

const Locationdisplay = ({ lat, lng }) => {
     if (lat === null || lng === null) {
    return <p >Fetching location...</p>;
  }

  return (
    <div>
      <p style={{color:"#DA6C6C",fontSize:"20px",paddingLeft:"30px",paddingTop:"20px"}}  ><strong>Latitude:</strong>&nbsp; &nbsp; &nbsp;&nbsp;  {lat}</p>
      <p style={{color:"#DA6C6C",fontSize:"20px",paddingLeft:"30px"}} ><strong>Longitude:</strong>&nbsp; &nbsp;  {lng}</p>

      <iframe
        title="location"
        width="100%"
        height="300"
       
        src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
        style={{ marginTop: '17px', borderRadius: '8px' }}
      ></iframe>
    </div>
    
  )
}

export default Locationdisplay
