const { Schema, model } = require("mongoose");
const Post = require("./Post");

const postCommentSchema = new Schema({
  body: {
      type: String,
      required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: Post 
  }
});

const PostComment = model("PostComment", postCommentSchema);

module.exports = PostComment;