const User = require("../models/user.model");

const getDashboard = (req, res) => {
  const user = req.user;
  return res.status(200).render("dashboard/index", {user: user});
};

module.exports = {
  getDashboard,
};
