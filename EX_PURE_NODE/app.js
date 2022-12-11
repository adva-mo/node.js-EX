// import { assert } from "console";
import http from "http";
import url from "url";
import json from "./public/users.json" assert { type: "json" };
import path from "path";

// const path = require("path"); //* we use this built in method to manipulate path's strings

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

// const publicDirectoryPath = path.join(__dirname, "../public");
// console.log(publicDirectoryPath);

const server = http.createServer(function (req, res) {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.pathname;
  // path = path.replace(/^\/+|\/+$/g, "");
  console.log(path);
  let qs = parsedURL.query;
  let headers = req.headers;
  let method = req.method.toLowerCase();
  req.on("data", function () {});
  req.on("end", function () {
    console.log("send a response");
    let route =
      typeof routes[path] !== "undefined" ? routes[path] : routes["notFound"];
    let data = {
      path: path,
      queryString: qs,
      headers: headers,
      method: method,
    };
    route(data, res);
  });
});

server.listen(1234, function () {
  console.log("Listening on port 1234");
});

let routes = {
  users: function (data, res) {
    let payloadStr = JSON.stringify(json);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.write(payloadStr);
    res.end("\n");
  },

  "raw-html": function (data, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.write("<h1>Welcome</h1>");
    res.end("\n");
  },

  "/": function (data, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.write("/"); //!send html file

    res.end("\n");
  },

  notFound: function (data, res) {
    let payload = {
      message: "File Not Found",
      code: 404,
    };
    let payloadStr = JSON.stringify(payload);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(404);
    res.write(payloadStr);
    res.end("\n");
  },
};
