const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Value Stream Management Lab App is running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.get("/tasks", (req, res) => {
  res.json([
    { id: 1, title: "Build pipeline", status: "done" },
    { id: 2, title: "Run tests", status: "done" },
    { id: 3, title: "Deploy artifact", status: "pending" }
  ]);
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;