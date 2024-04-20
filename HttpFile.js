const http = require("http");
const server = http.createServer(function (req, res) {
  res.end("hello this is a server");
});

server.listen(3000);
