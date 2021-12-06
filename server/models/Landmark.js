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
  },
  visits : {
    type: Number,
    default: 0,
  } 
},
{
  toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true } // So `toObject()` output includes virtuals
});
landmarkSchema.virtual('posts', {
  ref: 'Post', // The model to use
  localField: '_id', // Find people where `localField`
  foreignField: 'landmark', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
});


const Landmark = model("Landmark", landmarkSchema);

module.exports = Landmark;