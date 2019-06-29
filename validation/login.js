const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) { //this is the same as an arrow function
    let errors = {};

    data.email = !isEmpty(data.email)? data.email : '';
    data.password = !isEmpty(data.password)? data.password : '';

    if (!validator.isLength(data.password, {min: 4, max: 30})) {
        errors.password = 'Password must be between 4 and 30 characters';
    }

    if (validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}