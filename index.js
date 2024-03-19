const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const PORT = 5000;

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

app.listen(PORT, function () {
    console.log('Server is running on port', PORT);
});
