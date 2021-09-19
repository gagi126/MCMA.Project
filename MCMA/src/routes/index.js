const express = require('express')

const tecnicos = require('./tecnicos')
const edificios = require('./edificios')

const router = express.Router()

router.use('/tecnicos', tecnicos);
router.use('/edificios', edificios);

module.exports = router