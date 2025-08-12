import React, { useState, useEffect } from "react";
import { useNotifications } from "./NotificationContext";

const initialFeatures = [
  { id: 1, name: "Appointment Booking", completed: false },
  { id: 2, name: "Medication Reminders", completed: false },
  { id: 3, name: "SOS Emergency Button", completed: false },
  // add more...
];


export default function FeaturesPage() {
  const [features, setFeatures] = useState(initialFeatures);
  const { notify } = useNotifications();

  // helper to toggle complete
  const toggleComplete = (id) => {
    setFeatures(prev =>
      prev.map(f => {
        if (f.id === id && !f.completed) {
          // notify when becomes completed (only on change to true)
          notify({ title: `${f.name} completed`, body: `${f.name} has been marked as completed.` });
          return { ...f, completed: true };
        }
        return f;
      })
    );
  };

  // OPTIONAL: notify when ALL features are completed
  useEffect(() => {
    const allDone = features.length > 0 && features.every(f => f.completed);
    if (allDone) {
      notify({ title: "All HealSync features completed", body: "Congratulations — all features are completed." });
    }
  }, [features]);

  return (
    <div>
      <h2 style={{fontWeight:"bold" ,paddingTop:"20px",paddingLeft:"400px", color:"brown"}}>HealSync Features</h2>
      <ul style={{color:"brown" ,marginLeft:"50px",marginTop:"30px",fontWeight:"bold"}}>
        {features.map(f => (
          <li key={f.id} style={{ marginBottom: 8 }}>
            <span style={{ marginRight: 12 }}>{f.name}</span>
            <button  class="button-62"  type="submit"  onClick={() => toggleComplete(f.id)} disabled={f.completed}>
              {f.completed ? "Completed" : "Mark Completed"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
