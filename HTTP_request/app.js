const http = require("http");
const fs = require("fs");
const url = require("url");
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}:${req.url} New request received\n`;

  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("data.txt", log, async (err, resp) => {
    switch (myUrl.pathname) {
      case "/":
        await res.end("Homepage");
        break;
      case "/about":
        const username = myUrl.query.username;
        await res.end(`Hey ${username}`);
        res.end("I am Pranita");
        break;
      case "/search":
        const search = myUrl.query.search_query;
        await res.end(`Hey you have searched for ${search}`);
      default:
        await res.end("404 Not Found");
    }
    // res.end("Hello");
  });
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
