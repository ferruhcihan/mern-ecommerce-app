const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("User Router!");
});

router.post("/", (req, res) => {
  const { username } = req.body;
  res.send("Your user name is " + username);
});

module.exports = router;
