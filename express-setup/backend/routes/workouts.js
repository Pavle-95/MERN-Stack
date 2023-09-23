const express = require('express');

const route = express.Router();

// GET all workouts
route.get('/', (req, res) => {
  res.json({msg: 'Get all workouts'})
});

// GET single workout
route.get('/:id', (req, res) => {
  res.json({msg: 'Get single workout'})
});

// POST new workout
route.post('/', (req, res) => {
  res.json({msg: 'Post workout'})
})

// DELETE workout
route.delete('/:id', (req, res) => {
  res.json({msg: 'Delete single workout'})
})

// UPDATE workout
route.patch('/', (req, res) => {
  res.json({msg: 'Update single workout'})
})


module.exports = route;