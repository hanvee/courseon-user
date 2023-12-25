const express = require('express');
const router = express.Router();
const usersHandler = require('./handler/users');

router.get('/', usersHandler.getAllUsers);
router.get('/:id', usersHandler.getUserById);
router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.post('/logout', usersHandler.logout);
router.put('/update/:id', usersHandler.update);

module.exports = router;
