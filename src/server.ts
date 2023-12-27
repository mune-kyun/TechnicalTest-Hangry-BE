require("dotenv").config();
import http from "http";
import url from "url";
import writeResponse from "./utils/writeResponse";

let dataStore = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === "/" && req.method === "GET") {
    // Get all items
    writeResponse(res, 200, dataStore);
  } else {
    // Handle 404 Not Found
    writeResponse(res, 404, { error: "Endpoint not found" });
  }
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
