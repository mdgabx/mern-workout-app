const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ msg: 'GET all workouts' })
})

router.get('/:id', (req, res) => {
    res.json({ msg: 'GET a single workouts' })
})

router.post('/', async (req, res) => {
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
})

router.delete('/:id', (req, res) => {
    res.json({ msg: 'Delete a workouts' })
})

router.patch('/', (req, res) => {
    res.json({ msg: "Update a workout" })
})


module.exports = router