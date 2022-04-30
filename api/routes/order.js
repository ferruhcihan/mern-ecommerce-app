const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Order Router!");
});

module.exports = router;
