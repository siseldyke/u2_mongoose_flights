//we can now give those schemas a name to work with so we can refer to and work with them
const mongoose = require('mongoose')
const airportSchema = require('./Airport')
const flightSchema = require('./Flight')

//we can give them any name we want, but like so much else in JS, it would be counterintuitive to not give it a semantic, recognizable name
const Airport = mongoose.model('Airports', airportSchema)
const Flight = mongoose.model('Flights', flightSchema)

module.exports = {
    Airport,
    Flight
  
}

