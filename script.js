const fs = require("fs");
fs.rename(
  "hey.txt",
  "myfile.txt",

  (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("done");
    }
  }
);

fs.copyFile("myfile.txt", "./copy/copy.txt", (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("done");
  }
});
