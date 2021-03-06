const { Schema, model } = require("mongoose");
const PostComment = require("./PostComment");

const commentCommentSchema = new Schema({
  body: {
      type: String,
      required: true
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: PostComment 
  }
});

const CommentComment = model("CommentComment", commentCommentSchema);

module.exports = CommentComment;