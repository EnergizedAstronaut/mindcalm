const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  let filePath = path.join(__dirname, "dist", req.url === "/" ? "index.html" : req.url);

  const ext = path.extname(filePath);

  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml"
  };

  const contentType = mimeTypes[ext] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {

    if (err) {
      fs.readFile(path.join(__dirname, "dist", "index.html"), (err2, content2) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content2);
      });
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }

  });

});

server.listen(port, () => {
  console.log("Server running on port", port);
});
