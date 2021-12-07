const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/connection");
const db = require("../models");
const landmarkSeed = require("./landmarks");


const postSeed = [
  {
    wasThere: true,
    image_url: "https://imageurl.com",
    initial_comment: "this place rocks!",
    landmark: mongoose.Types.ObjectId("61ae6486e99497f71286904c"),
    user: mongoose.Types.ObjectId("61ae646e17f4301aa520687a"),
  },
  {
    wasThere: true,
    image_url: "https://imageurl.com",
    initial_comment: "this place rocks!",
    landmark: mongoose.Types.ObjectId("61ae6486e99497f71286904c"),
    user: mongoose.Types.ObjectId("61ae646e17f4301aa520687a"),
  },
  {
    wasThere: true,
    image_url: "https://imageurl.com",
    initial_comment: "this place slaps!",
    landmark: mongoose.Types.ObjectId("61ae6486e99497f71286904c"),
    user: mongoose.Types.ObjectId("61ae646e17f4301aa520687a"),
  },
  {
    wasThere: true,
    image_url: "https://imageurl.com",
    initial_comment: "this place is amazing!",
    landmark: mongoose.Types.ObjectId("61aa8e255aa7698f7c59c8c2"),
    user: mongoose.Types.ObjectId("61ae64449274bfafc5824560"),
  },
  {
    wasThere: true,
    image_url: "https://imageurl.com",
    initial_comment: "this place rules!",
    landmark: mongoose.Types.ObjectId("61aa8e255aa7698f7c59c8c2"),
    user: mongoose.Types.ObjectId("61ae64449274bfafc5824560"),
  },
  {
    wasThere: true,
    image_url: "https://imageurl.com",
    initial_comment: "this place rules super hard!",
    landmark: mongoose.Types.ObjectId("61aa8e255aa7698f7c59c8c2"),
    user: mongoose.Types.ObjectId("61ae64449274bfafc5824560"),
  },
  {
    wasThere: true,
    image_url: "https://imageurl.com",
    initial_comment: "this place rocks super hard!",
    landmark: mongoose.Types.ObjectId("61aa8e255aa7698f7c59c8c2"),
    user: mongoose.Types.ObjectId("61ae64449274bfafc5824560"),
  },
];

const userSeed = [
  {
    _id: mongoose.Types.ObjectId("61ae646e17f4301aa520687a"),
    username: "rightsaidfred",
    first_name: "Fred",
    last_name: "Fairbrass",
    email: "toosexyformyshirt@yahoo.com",
    password: "password123",
  },
  {
    _id: mongoose.Types.ObjectId("61ae64449274bfafc5824560"),
    username: "millivanilli",
    first_name: "Frank",
    last_name: "Farian",
    email: "blameitontherain@gmail.com",
    password: "password123",
  },
];

db.Landmark.deleteMany({})
  .then(() => db.Landmark.collection.insertMany(landmarkSeed))
  .then((data) => {
    console.log(`${data.result.n} landmarks inserted!`);
    return db.User.deleteMany({});
  })
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(`${data.result.n} users inserted!`);
    return db.Post.deleteMany({});
  })
  .then(() => db.Post.collection.insertMany(postSeed))
  .then((data) => {
    console.log(`${data.result.n} posts inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

