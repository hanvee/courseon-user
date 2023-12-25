const express = require('express');
const router = express.Router();
const refreshTokensHandler = require('./handler/refresh-tokens');

router.post('/create', refreshTokensHandler.create);
router.get('/', refreshTokensHandler.getToken);

module.exports = router;
