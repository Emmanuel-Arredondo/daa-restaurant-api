const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controllers');

router.post('/login',homeController.login);
module.exports = router;