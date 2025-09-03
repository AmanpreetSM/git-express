const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.json({
    msg: "Hello, World",
  });
});

app.post("/signup", async (req, res) => {
  const { username, email } = req.body;
  res.json({
    username: username,
    email: email,
  });
});

app.post("/todos", async (req, res) => {
  const { title, description } = req.body;

  res.json({
    title: title,
    description: description,
  });
});
app.listen(PORT, console.log(`Website is hosted on http://localhost:3000`));
