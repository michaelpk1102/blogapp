const router = require("express").Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/upload/blog' })


const { getBlog, createBlog } = require("../controller/blog.controller");
const validateCookie = require('../middleware/auth')
router.get("/", getBlog);

router.get("/new/post", validateCookie,   (req, res)=>{
    return res.render('blog/create')
});

router.post("/new/post", upload.single('photo'), validateCookie, createBlog);

module.exports = router;
