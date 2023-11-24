const router = require("express").Router();
const {
  getSignup,
  postSignup,
  getLogin,
  postLogin,
  logout,
} = require("../controller/auth.controller");

router.get("/auth/signup", getSignup);
router.post("/auth/signup", postSignup);

router.get("/auth/login", getLogin);
router.post("/auth/login", postLogin);
router.get("/auth/logout", logout)

module.exports = router;
