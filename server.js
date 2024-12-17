const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./models'); // Database connection

dotenv.config(); // Load environment variables
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const vehicleRoutes = require('./routes/vehicleRoutes');

// Use routes
app.use('/api/vehicles', vehicleRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await db.sequelize.sync(); // Sync database
  console.log('Database synced!');
});
