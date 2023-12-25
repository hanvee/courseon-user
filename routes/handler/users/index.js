const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');
const register = require('./register');
const login = require('./login');
const logout = require ('./logout');
const update = require('./update');

module.exports = {
    getAllUsers,
    getUserById,
    register,
    login,
    logout,
    update
};
