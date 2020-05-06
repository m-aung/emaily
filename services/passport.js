const passport = require('passport');
// import passport for authentication
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
// import google strategy for google authentication
const keys = require ('../config/keys');
// import keys from config folder

passport.use(
    new GoogleStrategy(
        {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log ('asscess token', accessToken);
            console.log ('refresh token', refreshToken);
            console.log('profile:', profile);
        }
    )
);

