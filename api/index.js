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

app.listen(5000, () => {
  console.log("Backend server is running!");
});
