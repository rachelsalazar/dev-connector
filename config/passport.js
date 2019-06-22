// passport will figure out what's in the token, extract the payload,
// and give it back to you for the api call, api will use the information to get the data
// and then give you that data

const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');

// tokens get passed through authorization
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new jwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload);
    }));
}

