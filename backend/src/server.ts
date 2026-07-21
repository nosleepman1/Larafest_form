import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import responseRoutes from './routes/responseRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Define allowed origins
const allowedOrigins = [
  'http://localhost:5173', // Vite default client
  'http://localhost:5174', // Vite default admin
  'https://larafest.vercel.app',
  'https://larafest-admin.vercel.app',
  'https://larafest.laravel.sn',
  'https://admin.larafest.laravel.sn'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());

// Routes
app.use('/api', responseRoutes);

// Database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/larafest_form';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
