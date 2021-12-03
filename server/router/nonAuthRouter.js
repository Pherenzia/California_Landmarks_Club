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

router.get("/landmark/:id", (req, res) => {
    res.json();
});

router.get("/users", (req, res) => {
  res.json();
});

router.get("/user/:id", (req, res) => {
    res.json();
  });

router.post("/posts")

module.exports = router;
