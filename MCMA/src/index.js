const express = require('express')
const app = module.exports = express()
const router = require('./routes')
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv")
require('dotenv').config();

const PORT = process.env.PORT || 3001

app.use(cors());

//conection DB
mongoose.connect(
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
app.get('/',(request, response) =>  {
    response.send('<h1>MCMA</h1>')
})
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
