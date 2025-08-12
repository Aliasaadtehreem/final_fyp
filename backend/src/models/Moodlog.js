import mongoose from 'mongoose';

const moodLogSchema = new mongoose.Schema({
  patient: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Patient', 
    required: true 
  },
  mood: { 
    type: String, 
    enum: ['happy', 'sad', 'anxious', 'neutral'],
    required: true 
  },
  notes: { type: String }
}, { timestamps: true });

const MoodLog = mongoose.model('MoodLog', moodLogSchema);
export default MoodLog;
