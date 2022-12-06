//! with express we can creatw a server to store our application
// our domain for example:  app.com //*root route
//                          app.com/help
//                          app.com/about
// all the application will run on the app srver but we can have different routes
//  __dirname --> the absolute path to the directory the current script lives in
//  __filename --> the absolute path to the current script
//  those values, such as the require method, coming from the wrapper function (that wraps our code into one main function)

const express = require("express"); //* express is a function, and we call it to create a new express application
const path = require("path"); //* we use this built in method to manipulate path's strings

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath)); //* this fucntion is setting the provided directory, configuring it to our root app,

//! we use app.get method when user want to get data, that ltes us configure what the server should do when someone trying the get the resource out of the url
// we can decide if we return json, html etc..
//  take two arguments,first is the route: "" for the route "/help" for help etc..
//  the second is a function, describes what the server should do when someone trying to get the provided route
//  this function come with 2 important arguments:
//      1. req- object containing info about the incoming request to the server
//      2. res - contains a lots of method allowing us to customize what were going to send back to the requester

//*     after using the express function, a pointer to the root url is unneccesary

// app.get("", (req, res) => {
//   res.send("<h1>home page</h1>");
//   //   res.send("hello express"); //the answer to the requester. if its throught an npm package, or if its through the web, is going to diaplay in the broswer window
// });

app.get("/help", (req, res) => {
  // we can use an object as argument and express will stringify the object, it can be an array of objects and etc..
  res.send({
    name: "adva",
    age: 31,
  });
});

// app.get("/about", (req, res) => {
//   res.send("about page");
// });
app.get("/weather", (req, res) => {
  res.send("weather page");
});

//  app.listen is the method to tell express actualy satart the server,
//  the first arg is theport we are using, 3000 this is a default port, its ok for our local enviroment.
//  the second arg is a callback function which rus when the server is up and running.
//  the process of opening server and starting it its Asynchronus,

app.listen(3000, () => {
  console.log("server is up on port 3000"); // this msg will be visible only to us
});
