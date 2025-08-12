import mongoose from 'mongoose';

const emergencyAlertSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  triggeredBy: {  
    type: String,  
    enum: ['patient', 'system'], // Who triggered the alert
    required: true
  },
  familyMember: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Notify this family user
    required: true 
  },
  status: {
    type: String,
    enum: ['pending', 'acknowledged', 'resolved'],
    default: 'pending'
  },
  location: { 
    type: String,
    required: true // ✅ Must provide location
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const EmergencyAlert = mongoose.model('EmergencyAlert', emergencyAlertSchema);
export default EmergencyAlert;
