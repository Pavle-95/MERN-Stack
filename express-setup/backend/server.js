// Require .env File
require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');
const { default: mongoose } = require('mongoose');

// Express app
const app = express();

// Middleware
// app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, res.method);
  next();
});

// Routes
// Test Route
// app.get('/', (req, res) => {
//   res.json({msg: "Hello from the server"});
// });
// Test Route

// 
app.use('/api/workouts', workoutRoutes);

// Connect to db
mongoose.connect(process.env.MONG_URI)
  .then(() => {
    // Listen for requests
    // Slusamo ako nema greske
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB and Listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    // Logujemo gresku ako je ima
    console.log(error);
  })


// // Listen for requests
// app.listen(process.env.PORT, () => {
//   console.log('Listening on port', process.env.PORT);
// });