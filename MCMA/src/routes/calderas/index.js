const express = require ('express')
const controller = require ('../../controllers/calderas/controller')

const router = express.Router();

router.route('/showall_calderas').get(controller.indexCalderas);

module.exports = router;