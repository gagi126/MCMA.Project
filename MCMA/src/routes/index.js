const express = require('express')

const tecnicos = require('./tecnicos')
const edificios = require('./edificios')
const users = require('./users')
const calderas = require('./calderas')

const router = express.Router()

router.use('/users',users)
router.use('/calderas',calderas)
router.use('/tecnicos', tecnicos);
router.use('/edificios', edificios);

module.exports = router