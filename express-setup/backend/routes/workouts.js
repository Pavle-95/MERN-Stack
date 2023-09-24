const express = require('express');
const { 
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutControler');

const route = express.Router();

// GET all workouts
route.get('/', getWorkouts);

// GET single workout
route.get('/:id', getWorkout);

// POST new workout
route.post('/', createWorkout)

// DELETE workout
route.delete('/:id', deleteWorkout)

// UPDATE workout
route.patch('/:id', updateWorkout)


module.exports = route;