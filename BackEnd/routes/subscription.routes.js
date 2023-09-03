const express = require('express')
const router = express.Router()

const subscriptionController = require('../controllers/subscription.controller')
const { authJwt } = require("../middlewares");

router.route('/subscribe').post(authJwt.verifyToken, subscriptionController.subscribe)
router.route('/unsubscribe').get(authJwt.verifyToken, subscriptionController.unsubscribe)

module.exports = router