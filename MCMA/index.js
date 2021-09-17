const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const app = module.exports = express()
const PORT = 3001
const router = require('./routes')

//conection DB
mongoose.connect('mongodb+srv://Admin:dbcaldar@cluster0.hhvym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
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

/*const http = require('http')
let machines = 
[{
    "id":1,
    "machine":"Pontiac",
    "tipo_caldera":"Millwright"
},
{
    "id":2,
    "machine":"Ford",
    "tipo_caldera":"Boilermaker"
},
{
    "id":3,
    "machine":"Mercedes-Benz",
    "tipo_caldera":"Cement Mason"
}]
app.get('/api/getmachines',(request,response) =>{
    response.json(machines)
})
app.get('/api/machine/:id',(request,response) => {
    const id = Number(request.params.id)
    const machine = machines.find(machine => machine.id == id)
    console.log({id})
    console.log({machine})
    if (machine){
        response.json(machine)
    } else{
        response.status(404).end()
    }
})
app.delete('/api/machine/:id',(request,response) =>{
    const id = Number(request.params.id)
    const machine = machines.find(machine => machine.id !== id)
    response.status(204).end()

})
app.post('/api/machine',(request,response)=>{
    const machine = request.body
    if(!machine || !machine.machine){
        return response.status(400).json({
        error: 'machine.machine vacio'
        })
    }
    const ids = machines.map(machine => machine.id)
    const maxId = Math.max(...ids)
    const newMachine ={
        id: maxId + 1,
        machine: machine.machine,
        tipo_caldera: machine.tipo_caldera
    }
    machines = machines.concat(newMachine)
    response.json(newMachine)
})
*/