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

router.get("/users", (req, res) => {
  res.json();
});

router.get("/users/:id", (req, res) => {
  res.json();
});

router.post("/posts", (req, res) => {
    
  });


module.exports = router;
