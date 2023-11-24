const jwt = require("jsonwebtoken");

const validateCookie = (req, res, next) => {
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, "topsecret");
    req.user = user;
    next();
  } catch {
    res.clearCookie("token");
    return res.redirect("/auth/login");
  }
};

module.exports = validateCookie