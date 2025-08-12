import React from 'react'
import { useState } from 'react'
const Sosbutton = () => {
    const [sent, setSent] = useState(false);

  const handleSOS = () => {
    setSent(true);
    console.log(" SOS triggered Button (send to API )");
   
  };
  return (
    <>
       <div style={{ textAlign: 'center', padding: '30px' }}>
      <h2>Emergency SOS</h2>
      {sent ? (
        <p style={{ color: 'red' }}> Emergency Alert Sent to Family.</p>
      ) : (
        <button
          onClick={handleSOS}
          style={{
            padding: '20px 40px',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '24px',
            borderRadius: '50px',
            border: 'none'
          }}
        >
          PRESS SOS
        </button>
      )}
    </div>
    </>
  )
}

export default Sosbutton
