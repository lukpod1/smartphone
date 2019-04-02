const express = require('express')
const router = express.Router()

const smartphone_controller = require('../controllers/smartphone.controller')

router.get('/testar', smartphone_controller.test)

module.exports = router