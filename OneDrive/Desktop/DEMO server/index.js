const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Express Server</h1>");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});