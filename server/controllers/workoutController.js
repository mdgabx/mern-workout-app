const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1})

        res.status(200).json(workouts)
    } catch (err) {
        res.status(404).json({ msg: err.message })
    }
}


// get single workout

const getWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}



// create new workout

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    try {
        const workout = await  Workout.create({
            title,
            reps,
            load    
        })

        res.status(200).json(workout)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}


// delete workout

// update a workout

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout
}