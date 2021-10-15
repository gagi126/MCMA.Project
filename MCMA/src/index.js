import express from 'express';
const app = module.exports = express()
import router from './routes';
import cors from 'cors';
import { connect } from 'mongoose';
require('dotenv').config();

const PORT = process.env.PORT || 3001

use(cors());

//conection DB
connect(
    process.env.MONGO_URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true        
    })
    .then((result) =>{
        console.log('Database connected')
    })
    .catch((error)=>{
        console.log('Database not connected, error: ' , error)
    })
get('/',(request, response) =>  {
    response.send('<h1>MCMA</h1>')
})
use('/', router)

listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})