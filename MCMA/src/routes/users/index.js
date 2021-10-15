import { Router } from 'express';
import { json } from 'body-parser';
import controller from '../../controllers/users/controller';

const rout = Router();
const jsonParser = json()
rout.get('/showall_user',jsonParser,controller.indexClients);
rout.post('/addUser',jsonParser, controller.addUser);
rout.get('/:_id',jsonParser,controller.getUserById);
rout.delete('/:_id',jsonParser,controller.deleteUser);
rout.put('/:_id',jsonParser,controller.editUser);

rout.post('/addrol',jsonParser, controller.addRol);
rout.get('/showall_rol',jsonParser,controller.indexRol);



export default rout;