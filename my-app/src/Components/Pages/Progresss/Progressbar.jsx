import React from 'react';

const ProgressBar = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (


    <div style={{ marginBottom: '20px' }}>
      <h4 style={{color:"brown"}}>Progress: {percentage}%</h4>
      <div style={{ height: '20px', backgroundColor: '#eee', borderRadius: '5px' }}>
        <div
          style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: '#EAEBD0',
            borderRadius: '5px',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
