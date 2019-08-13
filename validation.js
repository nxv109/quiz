const Joi = require("@hapi/joi");

//register validation
const register_validation = (data) => {
    const schema = {
        fullName: Joi.string().required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    
    return Joi.validate(data, schema);
};

//login validation
const login_validation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    
    return Joi.validate(data, schema);
};

//forgot password validation
const forgot_password_validation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email()
    };
    
    return Joi.validate(data, schema);
};

module.exports.register_validation = register_validation;
module.exports.login_validation = login_validation;
module.exports.forgot_password_validation = forgot_password_validation;