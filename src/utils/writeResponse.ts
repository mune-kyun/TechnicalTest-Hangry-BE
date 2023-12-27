import http from "http";

const writeResponse = (
  res: http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
  },
  statusCode: number,
  body: any
) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
  return res;
};

export default writeResponse;
