const { User } = require('../../../models');
const Validator = require('fastest-validator');

module.exports = async (req, res) => {
    const userIds = req.query.user_Ids || [];
    
    const sqlOptions = {
        attributes:  ['id', 'name', 'email', 'role', 'profession', 'avatar']
    };

    if (userIds.length) {
        sqlOptions.where = {
            id: userIds
        };
    } 

    const user = await User.findAll(sqlOptions); 

    return res.json({
        message: 'success',
        data: user 
    });
}