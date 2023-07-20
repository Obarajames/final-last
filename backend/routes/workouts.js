//import express
const express = require('express')
//import workout
const workout = require('../models/workoutModel')
//import router
const router = express.Router()
const {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutcontroller')

//GET all posts
router.get('/',getAllWorkouts)

//GET a single post
router.get('/:id',getWorkout)

//POST a new post
router.post('/',createWorkout)

//DELETE a post
router.delete('/:id',deleteWorkout)


//UPDATE a post
router.patch('/:id',updateWorkout)


//export the whole router
module.exports = router