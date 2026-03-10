const express = require("express");
const dogFacts = require("./dog_facts");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public")); // add this line


// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Dog Facts API!",
    usage: "Try GET /facts or GET /facts?number=3",
    success: true,
  });
});


// Get dog facts
app.get("/facts", (req, res) => {
  const { number } = req.query;

  // If no number is given, return all facts
  if (number === undefined) {
    return res.json({ facts: dogFacts, success: true });
  }

  // Make sure it's a real positive whole number
  if (!/^\d+$/.test(number) || parseInt(number) === 0) {
    return res.status(400).json({
      error: "'number' must be a positive integer (e.g. ?number=5).",
      success: false,
    });
  }

  const count = parseInt(number, 10);

  // Make sure they're not asking for more facts than we have
  if (count > dogFacts.length) {
    return res.status(400).json({
      error: `Only ${dogFacts.length} facts available. Please use a number between 1 and ${dogFacts.length}.`,
      success: false,
    });
  }

  // Shuffle the facts and return however many were asked for
  const shuffled = [...dogFacts].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);

  return res.json({ facts: selected, success: true });
});


// Catch anything that doesn't match a route above
app.use((req, res) => {
  res.status(404).json({
    error: `Route '${req.originalUrl}' not found.`,
    success: false,
  });
});


app.listen(PORT, () => {
  console.log(`Dog Facts API running at http://localhost:${PORT}`);
});

module.exports = app;