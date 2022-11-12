const express = require('express');

const router = express.Router();

const { getSignup } = require('../controllers');

router.get('/signup', getSignup);

module.exports = router;
