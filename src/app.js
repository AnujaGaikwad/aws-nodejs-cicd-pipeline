const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "AWS Node.js CI/CD API is running!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.get("/api/info", (req, res) => {
  res.json({
    name: "AWS Node.js CI/CD Demo API",
    version: "1.0.0"
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
  });
}

module.exports = app;
