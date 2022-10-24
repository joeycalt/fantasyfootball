require('dotenv').config();

require('./config/db.connection')

const express = require ('express')

const morgan = require('morgan')

const cors = require('cors')

const PORT = process.env.PORT || 4000
const factsController = require('./controllers/facts-controller')


const app = express()

app.use(express.json());

app.use(morgan('dev'));

app.use(cors());

app.use('/food', factsController)

app.get('/',(req,res) => {
res.send('Hello World')

})

app.listen(PORT, ()=> console.log(`listening on ${PORT} ✅`))