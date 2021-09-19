const express = require('express');
const controller = require('../../controllers/edificios/controllers')

const router = express.Router();

router.route('/').get(controller.getEdificios)

module.exports = router