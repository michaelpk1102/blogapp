const Blog = require("../models/blog.model");

const getBlog = (req, res) => {
  Blog
    .find()
    .then((results) => {
      console.log(req.user)
      return res.status(200).render("index", {posts: results, user: req.user});
    })
    .catch((error) => {});
};



const createBlog = (req, res) => {
  const { title, body, author } = req.body;
  console.log(req.body)
  const post = new Blog({
    title,
    body,
    author,
  });
  post.save().then(() => {
    return res.status(201).redirect("/");
  });
};

module.exports = {
  getBlog,
  createBlog,
};
