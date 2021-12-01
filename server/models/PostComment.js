const { Schema, model } = require("mongoose");

const postCommentSchema = new Schema({
  body: {
      type: String,
      required: true
  },
  post_id: {
    type: Schema.Types.ObjectId,
    ref: Post 
  }
});

const PostComment = model("PostComment", postCommentSchema);

module.exports = PostComment;