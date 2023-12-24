const { User } = require('../../../models'); 
const bcrypt = require('bcrypt');
const Validator = require('fastest-validator'); 
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false', 
        email: 'email|empty:false',
        password: 'string|min:6',
        profession: 'string|optional'
    }; 

    const validate = v.validate(req.body, schema); 

    if (validate.length) {
        return res.status(400).json({
            status: 'error', 
            message: validate
        });
    }

    const email = req.body.email;
    const user = await User.findOne({
        where: { email: email }
    }); 

    if (user) {
        return res.status(490).json({
            status: 'error', 
            message: 'email already exist'
        });
    }

    const password = await bcrypt.hash(req.body.password, 10);
    const createdUser = await User.create({
        name: req.body.name, 
        email: req.body.email, 
        password: password,
        profession: req.body.profession, 
        role: 'student'
    }); 

    return res.json({
        id: createdUser.id
    });
}
