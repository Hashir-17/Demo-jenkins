const express = require('express');
const app = express();
const port = 3000;

let requestCount = 0; // Keeps track of the number of requests

// Array of random facts
const randomFacts = [
  "The Eiffel Tower can be 15 cm taller during the summer.",
  "Honey never spoils.",
  "Bananas are berries, but strawberries are not.",
  "Octopuses have three hearts.",
  "A day on Venus is longer than a year on Venus."
];

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware to count requests
app.use((req, res, next) => {
  requestCount++;
  next();
});

// Home route with EJS rendering
app.get('/', (req, res) => {
  res.render('index', { title: 'test js app', message: 'Welcome to the enhanced Node.js app with multiple endpoints!' });
});

// Status route: Shows server status
app.get('/status', (req, res) => {
  const status = {
    uptime: process.uptime(),
    requestCount: requestCount,
    message: 'Server is up and running!'
  };
  res.json(status);
});

// Random fact route
app.get('/random', (req, res) => {
  const randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
  res.json({ fact: randomFact });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
