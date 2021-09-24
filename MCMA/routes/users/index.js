const express = require ('express')
const controller = require ('../../controllers/users/controller')

const rout = express.Router();

rout.get('/showall_user',controller.indexClients);
//rout.get('/showall_rol',controller.indexRol);
rout.post('/', controller.addUser);
rout.post('/addrol', controller.addRol);


module.exports = rout;