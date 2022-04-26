const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb_connect_link")
  .then(() => console.log("DB Connection is Successful!"));

app.listen(5000, () => {
  console.log("Backend server is running!");
});
