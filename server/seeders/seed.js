const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/connection");
const db = require("../models");

const landmarkSeed = [
  {
    name: "ADOBE CHAPEL OF THE IMMACULATE CONCEPTION",
    description:
      "Originally built as the home of San Diego's John Brown. In 1850, the house was converted to a church by Don José Aguirre in 1858. Father Antonio D. Ubach, formerly a missionary among the Indians, was parish priest here from 1866 to 1907. It is said that he was the model for “Father Gaspara” in Helen Hunt Jackson's Ramona. In 1937 the WPA rebuilt the adobe chapel close to its original site.",
    latitude: "32°45′06″N",
    longitude: "117°11′39″W",
    imageUrl:
      "https://en.wikipedia.org/wiki/California_Historical_Landmarks_in_San_Diego_County#/media/File:Adobe_Chapel.jpg",
    county: "San Diego",
  },
  {
    name: "OLD POINT LOMA LIGHTHOUSE",
    description:
      "This lighthouse, built in 1854, was one of the first eight lighthouses on the Pacific Coast. It continued in use until 1891, when the new Pelican Point Lighthouse began operating. The Point Loma Lighthouse became the site of the Cabrillo National Monument in 1913. During World War II, the Navy used it as a signal tower. Today the lighthouse remains the central feature of the Point Loma Preserve.",
    latitude: "32°40′18″N",
    longitude: "117°14′27″W",
    imageUrl:
      "https://en.wikipedia.org/wiki/California_Historical_Landmarks_in_San_Diego_County#/media/File:CabrilloLighthouse.jpg",
    county: "San Diego",
  },
  {
    name: "THE CASCADES",
    description:
      "This is the terminus of the Los Angeles-Owens River Aqueduct, which brings water 338 miles from the eastern slopes of the Sierra Nevada to the City of Los Angeles. Begun in 1905, the great aqueduct was completed November 5, 1913. The Mono Craters Tunnel project, completed in 1940, extended the system 27 miles to its present northernmost intake near Tioga Pass.",
    latitude: "34°19′22″N",
    longitude: "118°29′51″W",
    imageUrl:
      "https://en.wikipedia.org/wiki/California_Historical_Landmarks_in_Los_Angeles_County#/media/File:LA_Aqueduct_Cascades.jpg",
    county: "Los Angeles",
  },
  {
    name: "WESTERN HOTEL",
    description:
      "Erected by the Gilroy family in 1876, this building was purchased in 1902 by George T. Webber, who operated it as teh Western Hotel. The Lancaster Chamber of Commerce was organized in its dining room. Between 1905 and 1913, construction crews of the Los Angeles-Owens River Aqueduct were housed here, and it became a center of commercial and social activity in the early life of the community.",
    latitude: "4°41′54″N",
    longitude: "118°08′20″W",
    imageUrl:
      "https://en.wikipedia.org/wiki/California_Historical_Landmarks_in_Los_Angeles_County#/media/File:Western_Hoten_in_Lancaster_California.jpg",
    county: "Los Angeles",
  },
  {
    name: "SITE OF FIRST U.S. BRANCH MINT IN CALIFORNIA ",
    description:
      "The first United States branch mint in San Francisco was authorized by Congress July 3, 1852 and opened for operation April 3, 1854. Dr. L. A. Birdsall was the first superintendent, J. Huston, first minter, and A. Haraszthy, first assayer.",
    latitude: "7°47′39″N",
    longitude: "122°24′12″W",
    imageUrl:
      "https://en.wikipedia.org/wiki/California_Historical_Landmarks_in_San_Francisco#/media/File:First_San_Francisco_Mint_building_(taken_on_27Aug2012_13hrs48mins14secs).jpg",
    county: "San Francisco",
    _id: mongoose.Types.ObjectId("61ae6486e99497f71286904c"),
  },
];

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

