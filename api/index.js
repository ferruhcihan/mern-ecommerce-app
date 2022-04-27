const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const host = "127.0.0.1";
const port = 5000;

dotenv.config();

main()
  .then(() => console.log("DB Connection is Successful!"))
  .catch((err) => console.log("DB Connection Error: ", err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

// Homepage
app.get("/", (req, res) => {
  res.send("E-Commerce App");
});

app.listen(port, host, () => {
  console.log("Backend server is running!");
});
