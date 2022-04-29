const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("User test api!");
});

router.post("/usertest", (req, res) => {
  const { username } = req.body;
  res.send("Your user name is " + username);
});

module.exports = router;
