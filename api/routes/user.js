const router = require("express").Router();
const { verifyToken } = require("./verifyToken");

router.put("/:id", verifyToken, (res, req) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    res.send("Successful!");
  }
});

module.exports = router;

// router.get("/", (req, res) => {
//   res.send("User Router!");
// });

// router.post("/", (req, res) => {
//   const { username } = req.body;
//   res.send("Your user name is " + username);
// });
