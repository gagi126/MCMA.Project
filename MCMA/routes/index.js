const express = require('express')

const users = require('./users/index')
const calderas = require('./calderas/index')
const router = express.Router();

router.use('/users', users)
router.use('/calderas', calderas)

module.exports = router