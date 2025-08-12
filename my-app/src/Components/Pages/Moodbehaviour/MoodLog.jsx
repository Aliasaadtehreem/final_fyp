import React from 'react';

const MoodLog = ({ entries }) => {
  return (
    <div>
      <h3  style={{color:"burlywood"  }}> Mood Log</h3>
      {entries.length === 0 ? (
        <p style={{color:"brown",paddingLeft:"54px" }}>No mood entries yet.</p>
      ) : (
        entries.map(entry => (
          <div key={entry.id} style={{ border: '1px solid #ccc', margin: '19px 0', padding: '10px' }}>
            <strong>{entry.mood}</strong> - {entry.date}
            {entry.note && <p> {entry.note}</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default MoodLog;
