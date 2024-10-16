const db = require('../db')
const {Flight} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const flightList = [
        {   airline: 'United',
            flightNumber: 12,
            price: 299,
            numberOfSeats: 85,
            departingAirport: '67103d47ecc356d6ecdb4b3e',
            arrivalAirport: '67103d47ecc356d6ecdb4b41',
            departureTime: '6:30 AM'  
        },
        {   airline: 'spirit',
            flightNumber: 6,
            price: 100,
            numberOfSeats: 20,
            departingAirport: '67103d47ecc356d6ecdb4b40',
            arrivalAirport: '67103d47ecc356d6ecdb4b41',
            departureTime: '10:45 AM'  
        },
        {   airline: 'southwestern',
            flightNumber: 3,
            price: 350,
            numberOfSeats: 120,
            departingAirport: '67103d47ecc356d6ecdb4b41',
            arrivalAirport: '67103d47ecc356d6ecdb4b3f',
            departureTime: '6:00 pm'  
        },
        {   airline: 'american airlines',
            flightNumber: 7,
            price: 499,
            numberOfSeats: 140,
            departingAirport: '67103d47ecc356d6ecdb4b3f',
            arrivalAirport: '67103d47ecc356d6ecdb4b41',
            departureTime: '2:00 PM'  
        },
        {   airline: 'frontier airlines',
            flightNumber: 2,
            price: 57,
            numberOfSeats: 8,
            departingAirport: '67103d47ecc356d6ecdb4b40',
            arrivalAirport: '67103d47ecc356d6ecdb4b41',
            departureTime: '9:30 AM'  
        },
        {   airline: 'delta',
            flightNumber: 84,
            price: 175,
            numberOfSeats: 110,
            departingAirport: '67103d47ecc356d6ecdb4b40',
            arrivalAirport: '67103d47ecc356d6ecdb4b3e',
            departureTime: '12:45 AM'  
        },
        {   airline: 'jetblue',
            flightNumber: 9,
            price: 1200,
            numberOfSeats: 345,
            departingAirport: '67103d47ecc356d6ecdb4b3f',
            arrivalAirport: '67103d47ecc356d6ecdb4b40',
            departureTime: '5:00 pm'  
        },


    ]

    await Flight.insertMany(flightList)
    console.log("Created some flights!")
    
}


const run = async () => {
  
    await main()
    db.close()
}

run()