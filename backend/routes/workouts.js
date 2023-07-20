const express = require('express')
const workout = require('../models/workoutModel')
const router = express.Router()
const {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutcontroller')

//GET all workouts from db
router.get('/',getAllWorkouts)

//GET a single workout from db
router.get('/:id',getWorkout)

//POST a new workout from db
router.post('/',createWorkout)

//DELETE a workout from db
router.delete('/:id',deleteWorkout)


//UPDATE a workout from db
router.patch('/:id',updateWorkout)



module.exports = router