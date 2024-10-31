const express = require('express');
const router = express.Router();
const { getHomePage, getAge, getMyLove } = require('../controllers/homeController')
router.get('/', getHomePage)
router.get('/age', getAge)

router.get('/love', getMyLove)

module.exports = router