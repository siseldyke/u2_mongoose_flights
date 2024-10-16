const db = require('../db')
const {Airport} = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airportList = [
        {   name: 'Newark Airport',
            location: 'Newar, New Jersey',
            code: 'EWR',
        },
        {   name: 'JFK Airport',
            location: 'Queens, New York',
            code: 'JFK',  },
        {   name: 'Jacksonville intl Airport',
            location: 'Jacksonville Florida',
            code: 'JAX', },
        {   name: 'Nashville intl Airport',
            location: 'Nashville, Tennessee',
            code: 'BNA',  },


    ]
    await Airport.insertMany(airportList)
    console.log("Created some airports!")
    
}


const run = async () => {
  
    await main()
    db.close()
}

run()
