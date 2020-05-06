const passport = require ('passport');

module.exports = (app) => {
// indent the module to app route handlers.
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google'));
};
