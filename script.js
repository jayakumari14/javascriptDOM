const fs = require("fs");
fs.writeFile("hey.txt", "helllllo", (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("done");
  }
});
