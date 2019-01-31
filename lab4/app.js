let http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("Response's coming from server ... \n");
    res.end();
  })
  .listen(8080);
console.log("listening ...");
