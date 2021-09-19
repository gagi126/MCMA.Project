const express = require('express');
const controller = require('../../controllers/tecnicos/controllers')

const router = express.Router();

router.route('/').get(controller.getTecnicos)

module.exports = router