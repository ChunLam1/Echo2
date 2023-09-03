const express = require('express')
const router = express.Router()

const audioController = require('../controllers/audioController')
const authJwt = require('../middlewares/authJwt')

router.route('/').post(authJwt.verifyToken, audioController.create)
router.route('/:audioId').put(authJwt.verifyToken, audioController.update).get(authJwt.verifyToken, audioController.getOne).delete(authJwt.verifyToken, audioController.delete)

module.exports = router