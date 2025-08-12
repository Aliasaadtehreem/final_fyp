import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Route imports
import emergencyRoutes from './routes/emergency_routes.js';
import moodLogRoutes from './routes/moodlog_routes.js';
import healthLogRoutes from './routes/healthlog_routes.js';
import patientRoutes from './routes/patient_routes.js';
import authRoutes from './routes/auth_routes.js';



// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;



// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((error) => console.error("❌ MongoDB Connection Failed:", error));

// Routes
app.use('/api/emergency', emergencyRoutes);
app.use('/api/moodlogs', moodLogRoutes);
app.use('/api/healthlogs', healthLogRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/auth', authRoutes);


// Test Route
app.get('/', (req, res) => {
  res.send('🚑 HealSync API Running');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
