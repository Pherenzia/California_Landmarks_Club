const router = require("express").Router();
const {
  User,
  Landmark,
  Post,
  PostComment,
  CommentComment,
} = require("../models");


router.get("/landmarks", (req, res) => {
  Landmark.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/landmarks/:id", (req, res) => {
  Landmark.findOne({ _id: req.params.id }, (err, items) => {
    console.log(items)
    if (err) res.status(500).send(error);
    res.status(200).json(items);
  });
});

router.get("/users", async (req, res) => {
  const users = await User.find()
  res.json(users);
});

router.get("/users/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password");
  res.json(user);
});

router.get("/posts", (req, res) => {
  Post.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
