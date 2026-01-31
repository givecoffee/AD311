// main app.js

const express = require('express');
const app = express();

// use venv port or default to 3000
const PORT = process.env.PORT || 3000;

// root route
app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Hello!');
});

// about route 
app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Me');
});

// conditional route for /foo
app.get('/foo', (req, res, next) => {
    if (Math.random() < 0.5) {
        res.type('text/plain');
        res.send('Foo!');
    } else {
        next(); // pass to next handler
    }
});

// second handler for /foo
app.get('/foo', (req, res) => {
    res.type('text/plain');
    res.send('and Bar!');
});

// regular expression route for matching /user and /username
app.get(/^\/user(name)?$/, (req, res) => {
    res.type('text/plain');
    res.send('User Route Matched!');
});

// dynamic route for /greet/:name
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.type('text/plain');
    res.send(`Hello, ${name}!`);
}
);

// query string handling 
app.get('get', (req, res) => {
    console.log('Query Parameters:', req.query);
    res.type('text/plain');
    res.send('Query parameters received: ${JSON.stringify(req.query)}');
});

// 404 Error handling
app.use((req, res) => {
    res.status(404);
    res.type('text/plain');
    res.send('404 - Not Found');
});

// start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});    

