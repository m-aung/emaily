const express = require('express');
// import express 
const app = express ();
//  single app

app.get ('/', (req, res) => {
    res.send({ bye: 'buddy' });
})

const PORT = process.env.PORT || 5000;
// enviorment variables defy for runtime by Heroku || 5000 is developing enviroment

app.listen(PORT);