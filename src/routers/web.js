const express = require('express');
const router = express.Router();
const { getHomePage, getAge, getMyLove, postNewUser } = require('../controllers/homeController')
router.get('/', getHomePage)
router.get('/age', getAge)

router.get('/love', getMyLove)
router.post('/create-user', postNewUser)


module.exports = router