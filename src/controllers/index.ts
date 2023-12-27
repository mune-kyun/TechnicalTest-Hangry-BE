import http from "http";
import url from "url";

import writeResponse from "../utils/writeResponse";
import userController from "./userController";

const controller = (
  req: http.IncomingMessage,
  res: http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
  }
) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === "/") {
    writeResponse(res, 200, { message: "Welcome" });
  } else if (pathname === "/user") {
    userController(req, res);
  } else {
    writeResponse(res, 404, { error: "Endpoint not found" });
  }
};

export default controller;
