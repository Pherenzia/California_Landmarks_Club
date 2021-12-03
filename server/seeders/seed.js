const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/landmarks', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


const landmarkSeed = [
    {
        name: 'really-old-place',
        description: 'a description of this really old place',
        latitude: '',
        longitude: '',
        imageUrl: "https://parkwebsite.com",
        county: "San Diogo"
        
      },
      {
        name: 'really-old-place',
        description: 'a description of this really old place',
        latitude: '',
        longitude: '',
        imageUrl: "https://parkwebsite.com",
        county: "San Diogo"
        
      },
      {
        name: 'really-old-place',
        description: 'a description of this really old place',
        latitude: '',
        longitude: '',
        imageUrl: "https://parkwebsite.com",
        county: "San Diogo"
        
      },
      {
        name: 'really-old-place',
        description: 'a description of this really old place',
        latitude: '',
        longitude: '',
        imageUrl: "https://parkwebsite.com",
        county: "San Diogo"
        
      },
      {
        name: 'really-old-place',
        description: 'a description of this really old place',
        latitude: '',
        longitude: '',
        imageUrl: "https://parkwebsite.com",
        county: "San Diogo"
        
      },
      {
        name: 'really-old-place',
        description: 'a description of this really old place',
        latitude: '',
        longitude: '',
        imageUrl: "https://parkwebsite.com",
        county: "San Diogo"
        
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
  