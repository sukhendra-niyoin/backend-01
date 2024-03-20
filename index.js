const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const PORT = 5000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
    // This is the main route for our application  
    res.render("home");
});

app.get('/gallery', (req, res) => {
    res.render('images');
});

app.get('/watch', (req, res) => {
    res.render("watch");
});

app.get('/signup', (req, res) => {
    res.render("signup");
});

// middleware 
// app.use((req, res, next) => {
//     console.log('Middleware is running');
//     next();
// });

app.get('/profile/:username', (req, res) => {
    res.send(`Welcome to ${req.params.username} Profile`);
});

app.get('/contact', (req, res) => {
    res.send("Welcome to contact page")
});

app.get('/about', (req, res) => {
    res.send("Welcome to about page")
});

app.get('/main', (req, res) => {
    res.send("Welcome to main page");
});

app.get('/error', (req, res, next) => {
    throw Error('Something went wrong');
});

app.use(
    function errorHandler(err, req, res, next) {
        if (res.headersSent) {
            return next(err);
        }
        res.status(500)
        res.render('error', { error: err });
    }
);

app.listen(PORT, function () {
    console.log('Server is running on port', PORT);
});
