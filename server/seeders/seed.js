const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/landmarks", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const landmarkSeed = [
  {
    name: "really-old-place",
    description: "a description of this really old place",
    latitude: "",
    longitude: "",
    imageUrl: "https://parkwebsite.com",
    county: "San Diogo",
  },
  {
    name: "really-old-place",
    description: "a description of this really old place",
    latitude: "",
    longitude: "",
    imageUrl: "https://parkwebsite.com",
    county: "San Diogo",
  },
  {
    name: "really-old-place",
    description: "a description of this really old place",
    latitude: "",
    longitude: "",
    imageUrl: "https://parkwebsite.com",
    county: "San Diogo",
  },
  {
    name: "really-old-place",
    description: "a description of this really old place",
    latitude: "",
    longitude: "",
    imageUrl: "https://parkwebsite.com",
    county: "San Diogo",
  },
  {
    name: "really-old-place",
    description: "a description of this really old place",
    latitude: "",
    longitude: "",
    imageUrl: "https://parkwebsite.com",
    county: "San Diogo",
  },
  {
    name: "really-old-place",
    description: "a description of this really old place",
    latitude: "",
    longitude: "",
    imageUrl: "https://parkwebsite.com",
    county: "San Diogo",
  },
];

const postSeed = [
  {
    wasThere: true,
    image_url: "https://imageurl.com",
    initial_comment: "this place rocks!",
    landmark: "61aa8e255aa7698f7c59c8c0",
    user: "61aa91af7247b899c4e7aba9",
  },
  {
    wasThere: true,
    image_url: "https://imageurl.com",
    initial_comment: "this place rocks!",
    landmark: "61aa8e255aa7698f7c59c8c0",
    user: "61aa91af7247b899c4e7aba9",
  },
  {
    wasThere: true,
    image_url: "https://imageurl.com",
    initial_comment: "this place slaps!",
    landmark: "61aa8e255aa7698f7c59c8c0",
    user: "61aa91f07247b899c4e7abb",
  },
  {
    wasThere: true,
    image_url: "https://imageurl.com",
    initial_comment: "this place is amazing!",
    landmark: "61aa8e255aa7698f7c59c8c2",
    user: "61aa91f07247b899c4e7abb",
  },
  {
    wasThere: true,
    image_url: "https://imageurl.com",
    initial_comment: "this place rules!",
    landmark: "61aa8e255aa7698f7c59c8c2",
    user: "61aa91f07247b899c4e7abb",
  },
];

db.Landmark.deleteMany({})
  .then(() => db.Landmark.collection.insertMany(landmarkSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Post.deleteMany({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
