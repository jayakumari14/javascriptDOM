const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(function (req, res, next) {
  console.log("Middleware");
  next();
});

app.get("/", function (req, res) {
  res.send("welcome to express routing");
});

app.get("/about", function (req, res) {
  res.send("welcome to About Page");
});

app.use("/profile", function (req, res) {
  //   return next(new Error("something went wrong"));
  res.send("profile working");
});

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("something broke!");
// });

app.listen(3001);

console.log(__dirname);
