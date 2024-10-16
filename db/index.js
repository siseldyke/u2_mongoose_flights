const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://siseldyke:kirby1234@cluster0.p1oz7.mongodb.net/flightsDatabase?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db