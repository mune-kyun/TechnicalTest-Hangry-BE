import http from "http";

const handleBody = (
  req: http.IncomingMessage,
  callback: (body: any) => any
) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    const data = JSON.parse(body);
    callback(data);
  });
};

export default handleBody;
