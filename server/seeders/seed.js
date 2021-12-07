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
    pluscode: "8544QR54+CMV",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Adobe_Chapel.jpg/1280px-Adobe_Chapel.jpg",

    county: "San Diego",
  },
  {
    name: "OLD POINT LOMA LIGHTHOUSE",
    description:
      "This lighthouse, built in 1854, was one of the first eight lighthouses on the Pacific Coast. It continued in use until 1891, when the new Pelican Point Lighthouse began operating. The Point Loma Lighthouse became the site of the Cabrillo National Monument in 1913. During World War II, the Navy used it as a signal tower. Today the lighthouse remains the central feature of the Point Loma Preserve.",
    latitude: "32°40′18″N",
    longitude: "117°14′27″W",
    pluscode: "8544MQC5+MM7",
     imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/CabrilloLighthouse.jpg/1280px-CabrilloLighthouse.jpg",
    county: "San Diego",
  },
  {
    name: "THE CASCADES",
    description:
      "This is the terminus of the Los Angeles-Owens River Aqueduct, which brings water 338 miles from the eastern slopes of the Sierra Nevada to the City of Los Angeles. Begun in 1905, the great aqueduct was completed November 5, 1913. The Mono Craters Tunnel project, completed in 1940, extended the system 27 miles to its present northernmost intake near Tioga Pass.",
    latitude: "34°19′22″N",
    longitude: "118°29′51″W",
     pluscode: "65P38GF3+426",
     imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LA_Aqueduct_Cascades.jpg/800px-LA_Aqueduct_Cascades.jpg",

    county: "Los Angeles",
  },
  {
    name: "WESTERN HOTEL",
    description:
      "Erected by the Gilroy family in 1876, this building was purchased in 1902 by George T. Webber, who operated it as teh Western Hotel. The Lancaster Chamber of Commerce was organized in its dining room. Between 1905 and 1913, construction crews of the Los Angeles-Owens River Aqueduct were housed here, and it became a center of commercial and social activity in the early life of the community.",
    latitude: "4°41′54″N",
    longitude: "118°08′20″W",
    pluscode: "8563MVX6+8CQ",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Western_Hoten_in_Lancaster_California.jpg",
    county: "Los Angeles",
  },
  {
    name: "SITE OF FIRST U.S. BRANCH MINT IN CALIFORNIA ",
    description:
      "The first United States branch mint in San Francisco was authorized by Congress July 3, 1852 and opened for operation April 3, 1854. Dr. L. A. Birdsall was the first superintendent, J. Huston, first minter, and A. Haraszthy, first assayer.",
    latitude: "7°47′39″N",
    longitude: "122°24′12″W",

    pluscode: "849VQHVW+MM7",
    imageUrl: "https://en.wikipedia.org/wiki/California_Historical_Landmarks_in_San_Francisco#/media/File:First_San_Francisco_Mint_building_(taken_on_27Aug2012_13hrs48mins14secs).jpg",
    county: "San Francisco",
  },
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
    name: "CUSTOM HOUSE",
    description:
      "On winning its independence from Spain in 1821, Mexico repealed the Spanish laws forbidding foreign trade and the California hide and tallow trade soon developed with New England. The Mexican Government erected the Custom House at Monterey, then the capital of Mexican California, in 1827, and until 1845, this was the only custom house north of Mexico. It was here on July 7, 1846 Commodore John D. Sloat, commander of the U.S. Pacific squadron, first raised the American flag and officially proclaimed California to be a part of the United States.",
    latitude: "36.6034583",
    longitude: "-121.8934783",
    pluscode: "848WJ434+8H4",
    imageUrl:
      "https://en.wikipedia.org/wiki/Old_Custom_House_(Monterey,_California)#/media/File:MontereyCalCustHouse_(cropped).JPG",
    county: "Monterey County",
  },
  {
    name: "PORTOLÁ JOURNEY'S END",
    description:
      "In 1769 the Portolá expedition of 63 men and 200 horses and mules camped near El Palo Alto, the tall tree. They had traveled from San Diego in search of Monterey but discovered instead the Bay of San Francisco. Finding the bay too large to go around, and deciding that Monterey had been bypassed, they ended the search and returned to San Diego.",
    latitude: "37° 26.872′ N",
    longitude: "122° 10.257′ W",
    pluscode: "849VCRXH+4JV",
    imageUrl:
      "https://www.hmdb.org/PhotoFullSize.asp?PhotoID=88027",
    county: "San Mateo",
  },
  {
    name: "MISSION SAN FRANCISCO SOLANO",
    description:
      "On July 4, 1823, Padre José Altamira founded this northernmost of California's Franciscan missions, the only one established in California under independent Mexico. In 1834, secularization orders were carried out by Military Commandant M. G. Vallejo, and Mission San Francisco Solano became a parish church serving the Pueblo and Sonoma Valley until it was sold in 1881.",
    latitude: "38°17′38″N",
    longitude: "122°27′21″W",
    pluscode: "84CV7GVV+HM3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mission_San_Francisco_Solano._Sonoma_State_Historic_Park.jpg/250px-Mission_San_Francisco_Solano._Sonoma_State_Historic_Park.jpg",
    county: "Sonoma",
  },
  {
    name: "GENERAL M. G. VALLEJO HOME",
    description:
      "The home of General Mariano Guadalupe Vallejo, known as 'Lachryma Montis' (Tears of the Mountain), was built in 1850. Its name was derived from the springs that now are the source of Sonoma's water supply. General Vallejo, born at Monterey July 7, 1808, was commander of the northern Mexican frontier, founder of the Pueblo of Sonoma, and a member of the first Constitutional Convention of California.",
    latitude: "38°17′50″N",
    longitude: "122°27′40″W",
    pluscode: "84CV7GWQ+VHJ",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Vallejo_Estate%2C_Spain_and_W._3rd_Sts.%2C_Sonoma%2C_CA_6-12-2010_3-43-35_PM.JPG/250px-Vallejo_Estate%2C_Spain_and_W._3rd_Sts.%2C_Sonoma%2C_CA_6-12-2010_3-43-35_PM.JPG",
    county: "Sonoma",
  },
  {
    name: "FORT ROSS",
    description:
      "Founded in 1812 by Russians from Alaska. When Russians withdrew to Alaska in 1841, Captain Sutter bought the improvements and supplies. The State acquired the fort in 1906 and the remaining buildings-Greek Orthodox Chapel, Commandant's Quarters, and Stockade-were restored. The chapel, destroyed by fire in 1970, was reconstructed in 1974.",
    latitude: "38°30′52″N",
    longitude: "123°14′37″W",
    pluscode: "84CRGQ74+QHC",
    imageUrl:
      "https://cdn.fortross.org/fortross-uploads/2021/10/FortRoss_AERIAL-3-2.jpg",
    county: "Sonoma",
  },
  {
    name: "FREMONT'S CAMP",
    description:
      "John C. Frémont's expedition from Fort Sutter to Upper Klamath Lake, which included Kit Carson and other scouts, camped here May 1-4, 1846. They were the first non-Indians ever to pass this way.",
    latitude: "41°51′16″N",
    longitude: "121°18′52″W",
    pluscode: "84HWVM3P+Q6F",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/John_Charles_Fremont.jpg/100px-John_Charles_Fremont.jpg",
    county: "Modoc",
  },
  {
    name: "BEAR FLAG MONUMENT",
    description:
      "On June 14, 1846, the Bear Flag Party raised the Bear Flag on this spot and declared California free from Mexican rule. Following the raising of the American flag at Monterey July 7, 1846 by Commodore John Drake Sloat, on July 9 the Bear Flag was hauled down and the American flag raised in its place by Lieutenant Joseph W. Revere, U.S.A., who had been sent to Sonoma from San Francisco by Commander John B. Montgomery of the U.S. Sloop-of-War Portsmouth.",
    latitude: "38°17′35.64″N",
    longitude: "122°27′24.48″W",
    pluscode: "84CV7GVV+77W",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bear_Flag_Revolt_Monument%2C_Sonoma_Plaza.jpg/300px-Bear_Flag_Revolt_Monument%2C_Sonoma_Plaza.jpg",
    county: "Sonoma",
  },
  {
    name: "BLOODY POINT",
    description:
      " In 1850 one of the bloodiest massacres of emigrants ever known on the Oregon Trail occurred here when Modoc Indians killed over 90 men, women, and children in a surprise attack. The following year another large party narrowly escaped the same fate, and the Indians succeeded in killing several smaller parties here.",
    latitude: "41°57′25″N",
    longitude: "121°21′17″W",
    pluscode: "84HWXJ4W+Q4C",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/The_Modocs_in_Their_Stronghold.jpg/100px-The_Modocs_in_Their_Stronghold.jpg",
    county: "Modoc",
  },
  {
    name: "CAPTAIN JACK'S STRONGHOLD",
    description:
      "From this fortress, Captain Jack and his Indian forces successfully resisted capture by U.S. Army troops from December 1, 1872 to April 18, 1873.",
    latitude: "41°49′18″N",
    longitude: "121°30′18″W",
    pluscode: "84HWRFCW+M26",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/CaptainJacksStronghold.jpg/250px-CaptainJacksStronghold.jpg",
    county: "Siskiyou",
  },
  {
    name: "READING ADOBE",
    description:
      "This was the home of Pierson Barton Reading (1816-1868), a California pioneer of 1843. He was a major in Frémont's California Battalion which fought in the Mexican War. He was a signer of the Capitulation of Cahuenga and discovered gold in 1848. Major Reading is buried nearby.",
    latitude: "40°22′17″N",
    longitude: "122°17′01″W",
    pluscode: "84GV9PC8+HH2",
    imageUrl:
      "https://res.cloudinary.com/hmwsi1uow/image/upload/c_scale,w_800/q_auto/v1436419390/jvvqsph2azibotjj0ky6.jpg",
    county: "Shasta",
  },
  {
    name: "NOBLE PASS ROUTE",
    description:
      "William H. Noble, accompanied by a party of citizens, showed the route for a wagon road across the Sierra Nevada in May 1852. It was from this point that emigrants got their first glimpse of the Sacramento Valley.",
    latitude: "40°22′17″N",
    longitude: "122°17′01″W",
    pluscode: "84GV9PC8+HH2",
    imageUrl:
      "https://res.cloudinary.com/hmwsi1uow/image/upload/c_scale,w_800/q_auto/v1436664590/gjdbdcgrnjwfskisfsyw.jpg",
    county: "Shasta",
  },
  {
    name: "RESIDENCE OF GENERAL WILLIAM B. IDE",
    description:
      "General Ide came to California with his family in 1845. Ide helped organize the revolt against the Mexican mandate requiring Americans to leave California, and was the first and only President of the California Republic, under Bear Flag Party proclamation.",
    latitude: "40.1968°N",
    longitude: "122.2252°W",
    pluscode: "84GV5QWF+PWF",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Front_of_William_B._Ide_Adobe.JPG/220px-Front_of_William_B._Ide_Adobe.JPG",
    county: "Tehama",
  },
  {
    name: "GUILLEM'S GRAVEYARD",
    description:
      "Almost 100 soldiers killed in action during the Modoc Indian War of 1872-73 were buried here. The bodies were moved to the National Cemetery in Washington, D.C. in the early 1890s.",
    latitude: "41.824075",
    longitude: "-121.556930555556",
    pluscode: "84HWRCFV+J6P",
    imageUrl:
      "https://res.cloudinary.com/hmwsi1uow/image/upload/c_scale,w_800/q_auto/v1445451735/pljowerj0gudhxsta7vj.jpg",
    county: "Siskiyou",
  },
  {
    name: "CRESSLER AND BONNER TRADING POST, 1865",
    description:
      "Cressler and Bonner started the first mercantile establishment in Modoc County here, in the first building erected in the town of Cedarville. They carried on a thriving business with emigrants en route to California and Oregon, and later with Surprise Valley settlers.",
    latitude: "41.5289222222222",
    longitude: "-120.17385",
    pluscode: "84HXGRHG+HF6",
    imageUrl:
      "https://cdn.elebase.io/29559e61-1a75-4e70-a155-f8688960c1c1/062cd85b-ce5f-4c00-94c8-36d3972eb35f-sie2436ad9a14cec7830.jpg?w=680&h=382&fit=crop&rot=auto&dpr=2&q=75",
    county: "Modoc",
  }

    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/First_San_Francisco_Mint_building_%28taken_on_27Aug2012_13hrs48mins14secs%29.jpg/1280px-First_San_Francisco_Mint_building_%28taken_on_27Aug2012_13hrs48mins14secs%29.jpg",
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

    username: 'millivanilli',
    first_name: 'Frank',
    last_name: 'Farian',
    email: 'blameitontherain@gmail.com',
    password: 'password123',
  }
]

    _id: mongoose.Types.ObjectId("61ae64449274bfafc5824560"),
    username: "millivanilli",
    first_name: "Frank",
    last_name: "Farian",
    email: "blameitontherain@gmail.com",
    password: "password123",
  },
];


db.User.deleteMany({})
.then(() => db.User.collection.insertMany(userSeed))
.then((data) => {
  console.log(`${data.result.n} records inserted!`);
  process.exit(0);
})
.catch((err) => {
  console.error(err);
  process.exit(1);
});

db.Landmark.deleteMany({})

.then(() => db.Landmark.collection.insertMany(landmarkSeed))
.then((data) => {
    console.log(`${data.result.n} landmarks inserted!`);   
    return db.Post.deleteMany({})

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
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

  
  db.Post.deleteMany({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then((data) => {
    console.log(`${data.result.n} posts inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


