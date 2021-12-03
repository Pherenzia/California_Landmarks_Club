const { Schema, model } = require("mongoose");
const Landmark = require("./Landmark");
const User = require("./User");

const postSchema = new Schema({

  wasThere: Boolean,
  rating: {
      type: Number,
      min: [1, 'Must be at least 1'],
      max: [5, 'Must no more than 5']
  },
  image_url: {
    type: String,
    match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'valid URL is required'],
  },
  initial_comment: {
    type: String,
    validate: [({ length }) => length >= 4, 'Comment should be longer.'],
  },
  landmark: {
      type: Schema.Types.ObjectId,
      ref: User
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: Landmark
}
});

const Post = model("Post", postSchema);

module.exports = Post;