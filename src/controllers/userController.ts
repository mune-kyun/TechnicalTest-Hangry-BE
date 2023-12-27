import http from "http";

import userService from "../services/userService";
import writeResponse from "../utils/writeResponse";

const userController = (
  req: http.IncomingMessage,
  res: http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
  }
) => {
  const { method } = req;

  if (method === "GET") {
    const users = userService.getAllUsers();

    writeResponse(res, 200, users);
  } else {
    writeResponse(res, 404, { error: "Endpoint not found" });
  }
};

export default userController;
