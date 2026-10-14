const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow JSON requests
app.use(express.json());

// Serve website files from the project root
app.use(express.static(__dirname));

// Homepage
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
console.log("NYLR 2026 server running on port ${PORT}");
});

