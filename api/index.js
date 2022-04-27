const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

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

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log("Backend server is running!");
});
