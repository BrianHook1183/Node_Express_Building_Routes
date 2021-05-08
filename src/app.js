const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

const sayPong = (req, res) => {
  res.send("pong!");
};

const sayWelcome = (req, res) => {
  res.send("Welcome to my server.");
};

app.get("/ping", sayPong);
app.get("/welcome", sayWelcome);

module.exports = app;
