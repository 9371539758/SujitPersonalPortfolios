import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environmental variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Enable Cross-Origin Requests so the React app can communicate if needed
app.use(cors());
// Parse incoming requests as JSON
app.use(express.json());

/**
 * GET /api/health
 * Simple diagnostic endpoint for future API extensions.
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    message: 'Sujit Gore Portfolio Backend Service is running.',
    time: new Date().toISOString()
  });
});

// Start the Express service
app.listen(PORT, () => {
  console.log(`Backend server successfully loaded on http://localhost:${PORT}`);
});
