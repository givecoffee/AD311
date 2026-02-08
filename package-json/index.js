const express = require("express");
const app = express();

app.get("/", (req, res) => {
res.send("Hello! I am demonstrating package.json.");
});

module.exports = app;

if (require.main === module) {
app.listen(3000, () => {
console.log("Server is running on http://localhost:3000");
});
}