const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ msg: 'GET all workouts' })
})

router.get('/:id', (req, res) => {
    res.json({ msg: 'GET a single workouts' })
})

router.post('/', (req, res) => {
    res.json({ msg: 'CREATE a workouts' })
})

router.delete('/:id', (req, res) => {
    res.json({ msg: 'Delete a workouts' })
})

router.patch('/', (req, res) => {
    res.json({ msg: "Update a workout" })
})


module.exports = router