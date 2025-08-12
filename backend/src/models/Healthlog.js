import mongoose from 'mongoose';

const healthLogSchema = new mongoose.Schema({
  patient: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Patient', 
    required: true 
  },
  bloodPressure: { type: String },
  sugarLevel: { type: String },
  heartRate: { type: Number },
  notes: { type: String }
}, { timestamps: true });

const HealthLog = mongoose.model('HealthLog', healthLogSchema);
export default HealthLog;
