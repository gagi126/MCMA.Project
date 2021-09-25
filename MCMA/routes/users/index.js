const express = require ('express')
const controller = require ('../../controllers/users/controller')

const router = express.Router();

router.route('/showall_user').get(controller.indexClient);

module.exports = router;