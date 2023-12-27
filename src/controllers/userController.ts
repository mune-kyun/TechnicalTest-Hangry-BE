import http from "http";

import userService from "../services/userService";
import writeResponse from "../utils/writeResponse";
import handleBody from "../utils/handleBody";

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
  } else if (method === "POST") {
    handleBody(req, (body) => {
      const user = userService.createUser(body);

      if (user) {
        writeResponse(res, 201, { data: user });
      } else {
        writeResponse(res, 400, { error: "Bad Parameter" });
      }
    });
  } else {
    writeResponse(res, 404, { error: "Endpoint not found" });
  }
};

export default userController;
