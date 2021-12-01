const { Schema, model } = require("mongoose");


const landmarkSchema = new Schema({

  name: {
    type: String,
    trim: true,
    required: 'Name is Required',
  },
  description: {
    type: String,
    trim: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'valid URL is required'],
  },
  county: {
      type: String,
      required: true,
  }
});


const Landmark = model("Landmark", landmarkSchema);

module.exports = Landmark;