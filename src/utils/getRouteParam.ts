import http from "http";
import url from "url";

const getRouteParam = (req: http.IncomingMessage): number | null => {
  const parsedUrl = url.parse(req.url, true);

  const pathSegments = parsedUrl.pathname.split("/");
  const id = parseInt(pathSegments[2]);

  return id;
};

export default getRouteParam;
