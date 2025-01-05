const express = require('express');
const app = express();

// Set view directory and templating engine
app.set('views', './views');
app.set('view engine', 'pug');
// Set static file directory name
app.use(express.static('public'));

// Middleware
app.use(function (req, res, next) {
    console.log('A new request is received!');
    next();
});

// Dashboard
app.get('/', function(req, res) {
    res.render('dashboard');
})
// Dynamic Home Route
app.get('/home/:name/:city', function(req, res) {
    const name = req.params.name;
    const city = req.params.city;
    const isUserLoggedIn = true;

    res.render('home', {
        name: name,
        city: city,
        user: {
            isUserLoggedIn: isUserLoggedIn,
        }
    })
});

app.listen(3000)