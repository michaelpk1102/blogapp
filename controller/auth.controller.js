const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const getSignup = (req, res) => {
  return res.status(200).render("auth/signup");
};

const postSignup = (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({
    username,
    email,
    password,
  });
  user.save().then(() => {
    return res.status(201).redirect("/auth/login");
  });
};

const getLogin = (req, res) => {
  return res.status(200).render("auth/login");
};

const postLogin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .exec()
    .then((user) => {
      if (user.password !== password) {
        return res.send("Wrong Password");
      }

      const token = jwt.sign(user.toJSON(), "topsecret", { expiresIn: "48h" });
      res.cookie("token", token, {
        httpOnly: true,
        // secure: true,
        // signed: true
      });
      return res.redirect("/dashboard");
    })
    .catch((err) => {
      console.log(err);
    });
};


const logout = (req, res)=>{
  res.clearCookie("token")
  return res.redirect('/auth/login')
}

module.exports = {
  getSignup,
  postSignup,
  getLogin,
  postLogin,
  logout
};
