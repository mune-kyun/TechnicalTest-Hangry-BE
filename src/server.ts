require("dotenv").config();
import http from "http";

import controller from "./controllers";

const server = http.createServer((req, res) => {
  controller(req, res);
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
