import React from 'react';
import  { useState } from 'react';
import MoodForm from '../Moodbehaviour/Moodform';
import MoodLog from '../Moodbehaviour/MoodLog';
import MoodProcess from './Moodprocess';
const Moodpage = () => {
  const [moodEntries, setMoodEntries] = useState([]);

  const addMoodEntry = (entry) => {
    setMoodEntries([entry, ...moodEntries]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto', color:"brown" }}>
      <h2 style={{color:"brown" ,paddingBottom:"20px"}}  > Mood & Behavior Tracker</h2>
      <MoodForm onAdd={addMoodEntry} />
      <MoodProcess entries={moodEntries} />
      <MoodLog entries={moodEntries} />
    </div>
  );
};

export default Moodpage;
