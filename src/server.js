const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();

app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.send("Hello my friends");
});

app.post("/reflect", upload.none(), (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("Server ready");
});
