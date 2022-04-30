const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Cart Router!");
});

module.exports = router;
