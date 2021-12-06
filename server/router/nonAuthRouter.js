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

router.get("/landmarks/:id", async (req, res) => {
  try {
    const landmark = await Landmark.findOne({ _id: req.params.id }).populate(
      "posts"
    );
    res.status(200).json(landmark);
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
});

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).select("-password").populate(
      "posts"
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
});


router.get("/posts", async (req, res) => {
  const posts = await Post.find()
  res.json(posts);
})

router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id }).populate(
      "posts"
    );
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
})



module.exports = router;
