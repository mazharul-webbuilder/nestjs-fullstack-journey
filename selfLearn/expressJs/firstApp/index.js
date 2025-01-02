const express = require('express');
const app = express();

app.set('view engine', 'pug')
app.set('views', './views');

const things = require('./things');

// Apply Middleware
app.use(function (req, res, next) {
    console.log('A new request has been called');

    next();
})

// Home route
app.get('/', function(req, res) {
    res.send('Dashboard!');
})

// Dynamic Routes
app.get('/:name', function(req, res) {
    res.send(`Welcome to ${req.params.name}`);
})

app.get('/:name/:age', function(req, res) {
    let formatInfo = `User name: ${req.params.name}. and age: ${req.params.age}`;

    res.send(formatInfo);

})

// Default Routes
app.get('*', function(req, res) {
    res.send('Not Found!');
})


// Separated routes imported

// Middleware
app.use('/things', function (req, res, next) {
    console.log('A request for things received for things route!');
    next();
})
app.use('/things', things);

// Load View Files
app.get('first-template', function(req, res) {
    res.render('first_view')
})

app.listen(3000);