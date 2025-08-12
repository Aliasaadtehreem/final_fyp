import React from 'react'

const ResourceCard = ({ title, description, type, link }) => {
  return (
    <>
      <div style={{
        border: '1px solid brown',
        borderRadius: '12px',
        padding: '15px',
        margin: '10px',
        width:"300px",
        height:"250px",
        marginTop:"20px",
        marginLeft:"10px",
        boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)",
        backgroundColor:"#EAEBD0",
        color:"brown"


      }}>
        <h5 style={{fontWeight:"bold",marginTop:"20px"}}>{title}</h5>
        <p >{description}</p>
        <p><strong>Type:</strong> {type}</p>
        <a href={link} target="_blank" rel="noreferrer">Read More</a>

      </div>

    </>
  )
}

export default ResourceCard
