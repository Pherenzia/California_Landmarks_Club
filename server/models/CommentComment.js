const { Schema, model } = require("mongoose");

const commentCommentSchema = new Schema({
  body: {
      type: String,
      required: true
  },
  comment_id: {
    type: Schema.Types.ObjectId,
    ref: PostComment 
  }
});

const CommentComment = model("CommentComment", commentCommentSchema);

module.exports = CommentComment;