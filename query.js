const db = require('./db');
const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();
const models = require('./models')





app.get('/', (req, res) => res.send('Flight Planner'))


const getAllAirports= async (req, res) => {
    try {
        const airports = await models.Airport.find()
        res.json(airports)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
app.get('/airports', getAllAirports)

const getAllFlights= async (req, res) => {
    try {
        const flights = await models.Flight.find()
        res.json(flights)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
app.get('/flights', getAllFlights)

const getAirportById = async (req, res) => {
    try {
        const { id } = req.params;
        const airport = await models.Airport.findById(id)
        if (airport) {
            return res.json(airport);
        }
        return res.status(404).send('Thats not an airport we have on file');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
app.get('/airports/:id', getAirportById)

const getFlightById = async (req, res) => {
    try {
        const { id } = req.params;
        const flight = await models.Flight.findById(id)
        if (flight) {
            return res.json(flight);
        }
        return res.status(404).send('Thats not an airport we have on file');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
app.get('/flights/:id', getFlightById)

const createFlight = async (req, res) => {
    try {console.log(req.body)
        const flight = await new models.Flight(req.body)
        await flight.save()
        return flight.status(201).json({
            flight,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
  }
app.post('/flights', createFlight)

const updateAirport = async (req, res) => {
    try {
        let { id } = req.params;
        let airport = await models.Airport.findByIdAndUpdate(id, req.body, { new: true })
        if (airport) {
            return res.status(200).json(airport)
        }
        throw new Error("airport not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
app.put('/airports/:id', updateAirport)
  
const updateFlight = async (req, res) => {
      try {
          let { id } = req.params;
          let flight = await models.Flight.findByIdAndUpdate(id, req.body, { new: true })
          if (flight) {
              return res.status(200).json(flight)
          }
          throw new Error("flight not found")
      } catch (error) {
          return res.status(500).send(error.message);
      }
  }
  app.put('/flights/:id', updateFlight)

  const deleteAirport= async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await models.Airport.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("airport has been deleted");
        }
        throw new Error("airport not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
app.delete('/flights/:id', deleteAirport)  


  const deleteFlight= async (req, res) => {
      try {
          const { id } = req.params;
          const deleted = await models.Flight.findByIdAndDelete(id)
          if (deleted) {
              return res.status(200).send("flight has been deleted");
          }
          throw new Error("flight not found");
      } catch (error) {
          return res.status(500).send(error.message);
      }
  }
app.delete('/flights/:id', deleteFlight)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))