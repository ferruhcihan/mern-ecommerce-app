const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRouter = require("./routes/user");

dotenv.config();

main()
  .then(() => console.log("DB Connection is Successful!"))
  .catch((err) => console.log("DB Connection Error: ", err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.use("/api/user", userRouter);

app.listen(process.env.PORT || 5000, process.env.HOST, () => {
  console.log("Backend server is running!");
});
