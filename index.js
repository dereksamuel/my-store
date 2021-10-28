require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.get("/products", (req, res) => {
  res.json({
    name: "Product 1",
    age: "41/25/58",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
