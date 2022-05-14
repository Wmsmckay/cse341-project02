const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const {
    deserializeUser
} = require('passport');
// const {
//     eventNames
// } = require('../app');
const AuthUser = require('../models/authenticatedUsers');

module.exports = function (passport) {
    passport.use(
        new GoogleStrategy({
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: 'https://cse341-project02-mw.herokuapp.com/auth/google/callback/'
                // callbackURL: '/auth/google/callback'

            },
            async (accessToken, refreshToken, profile, done) => {
                // console.log(profile);
                const newUser = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    image: profile.photos[0].value
                }
                try {
                    let user = await AuthUser.findOne({ googleId: profile.id })

                    if (user) {
                        done(null, user)
                    } else {
                        user = await AuthUser.create(newUser)
                        done(null, user)
                    }
                } catch (err) {
                    console.error(err)
                }
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        AuthUser.findById(id, (err, user) => done(err, user));
    });
};