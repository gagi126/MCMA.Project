const express = require('express')

const users = require('./users')
const calderas = require('./calderas')

const router = express.Router();

router.use('/users',users)
router.use('/calderas',calderas)

module.exports = router