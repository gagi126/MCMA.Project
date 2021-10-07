const express = require ('express')
const bodyParser = require('body-parser')
const controller = require ('../../controllers/users/controller')

const rout = express.Router();
const jsonParser = bodyParser.json()
rout.get('/showall_user',jsonParser,controller.indexClients);
rout.get('/showall_rol',jsonParser,controller.indexRol);
rout.post('/',jsonParser, controller.addUser);
rout.post('/addrol',jsonParser, controller.addRol);


module.exports = rout;