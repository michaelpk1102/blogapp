const mongoose = require("mongoose");
const Blog = require("./blog.model");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    posts:[ {
        type: Schema.Types.ObjectId,
        ref: "Blog",
      }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
