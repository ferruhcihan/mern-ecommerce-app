const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Product Router!");
});

module.exports = router;