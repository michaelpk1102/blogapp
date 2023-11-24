const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')



const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())





mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    app.listen(5000, ()=>{
        console.log("server running")
    });
  })
  .catch((err) => {
    if (err) throw err;
  });

app.use("/", require("./routes/auth.routes"))
app.use("/", require("./routes/dashboard.routes"))
app.use("/", require("./routes/blog.routes"));
app.use("*", (req, res) => {
  return res.status(404).render("404");
});
