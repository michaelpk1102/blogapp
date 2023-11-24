const router = require("express").Router();



const { getDashboard } = require("../controller/dashboard.conroller");
const validateCookie = require('../middleware/auth')

router.get("/dashboard", validateCookie, getDashboard);



module.exports = router;
