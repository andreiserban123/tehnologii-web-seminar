const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const users = require("./user");

const PORT = 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// Routes

app.get("/users", (req, res) => {
  const { age, name } = req.query;
  console.log(req.query);

  if (age) {
    const filteredUsers = users.filter((user) => user.age === parseInt(age));
    return res.json(filteredUsers);
  }
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const user = users.find((user) => user.id === id);

  if (user) {
    return res.json(user);
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
