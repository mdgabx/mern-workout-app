require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json()) // get the request body
app.use(cors()) // fix the cors issue in PUT, POST, DELETE, etc..

app.use((req, res, next) => {
    console.log(req.path, req.method)
    res.header('Access-Control-Allow-Origin', '*'); // allow CORS 
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        // app listen for request
        app.listen(process.env.PORT, () => {
            console.log('Listening to port and connected to DB...', process.env.PORT)
        })
    })
    .catch((err) => console.warn(err) )

