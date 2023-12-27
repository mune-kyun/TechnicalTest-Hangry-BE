import http from "http";

const writeResponse = (
  res: http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
  },
  statusCode: number,
  body: any
) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  body ? res.end(JSON.stringify(body)) : res.end();
  return res;
};

export default writeResponse;
