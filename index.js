const express = require('express');
// import express 
require ('./services/passport');


const app = express ();
//  single app


require ('./routes/authRoutes')(app);
// rerouting the app function from authRoutes.js


const PORT = process.env.PORT || 5000;
// enviorment variables defy for runtime by Heroku || 5000 is developing enviroment

app.listen(PORT);   