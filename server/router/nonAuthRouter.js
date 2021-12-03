const router = require("express").Router();
const {
  User,
  Landmark,
  Post,
  PostComment,
  CommentComment,
} = require("../models");

router.get("/", (req, res) => {
  res.json();
});

router.get("/landmarks", (req, res) => {
  
  res.json();
});

router.get("/landmarks/:id", (req, res) => {
  res.json();
});

router.get("/users", async (req, res) => {
  const users = await User.find()
  res.json(users);
});

router.get("/users/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password");
  res.json(user);
});

router.post("/posts", (req, res) => {
    
  });


module.exports = router;
