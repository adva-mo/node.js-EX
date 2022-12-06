// alternative to express:

//!  meteor JS

// Meteor is a full-stack JavaScript platform for developing modern web and mobile applications
// we can use it on the server side (on node.js, can be used with mondoDB etc and other noSQL dt)and on the client side,
// again on web, mobile and desktop.

// meteor works in a way that we wont have to refresh our browser in order to get the latest data,
// it works in websockets (DDP-  Distributed Data Protocol)
// which means that everytime theres a change in the db it will reflect in the client side.
// on the client side there is a mini-bucket, and when thers a change in the DB, meteor will pass it through
// websockets to the mini-bucket called minimongo
// it has a feature of shared javascript files, that way both server and client side can share function, for example.

//? disadvantage:
// doesnt have much server-side support
// big apps may run slow
// SQL support isnt good

//! nest.js

// nest.js VS express - used for building a small lightweight app.
// nest can organize  the app into self contained modules
// 1. NestJS is opinionated while ExpressJS is unopinionated. An opinionated framework means that it has a proper style or way of doing things. It has a proper structure and is less diverse. (reducing the need for explicit configuration.)
// 2. nest is based on typescript and js - inspired by angular.. (so most of what you find in angular you can find in nest) unlike express.
// 3. popularity  - express is more popular with over 57,000 stars on github.
// nest - number two with 47,000 stars
// 4. performance - Express can execute multiple operations independently of each other using asynchronous programming. Nest employs the Express framework by default. however nest provides an alternative way to change the underlying framework from express to fastify for instance for improved performance.
// In other words... Nest makes use the Express HTTP framework by default - but can work with any node http framework. (can be configured to use fastify).
// 5. anything that is supported in express is also supported  in nest.
// 6.supports dependency injection (you don’t need to have a hard dependency on things like components, services, and middleware within your code)
// 7.Nest offers a ready-to-use application architecture using controllers, providers, and modules. This enables developers and teams create applications that are simple to test and maintain.
// Express does not require a specific structure, which can provide flexibility for small or one-person development teams. However, this can become a problem as team size or app complexity grows, especially with developers working on different aspects of the app.
// 8. unit testing - The Nest CLI comes with a Jest-based default testing environment. When a service, interceptor, or controller is created, the CLI creates a spec file. This file includes auto-generated testing bed code, eliminating the need for developers to write additional code for unit testing. In Express, unit testing necessitates the construction of distinct codes, which takes time and might slow down the application’s productivity.

//! total.js

// Total.js supports real-time merging, mapping and minifying of JavaScript,
// CSS, and HTML files. You won't be limited,
// you can use any database like PostgreSQL,
// MongoDB, CouchDB, Firebase, Redis, etc.,
// or you can use most of the NPM dependencies besides.
// You don't need to use server-side and client-side framework together, it's optional.
// TOTAL.JS server-side framework will work with most client-side frameworks,
// and it's client-side library will work with most server-side technologies.
// ------------------------------------------
// Flow Visual Programming Interface
// ------------------------------------------
// ExpressJS vs Total.js: What are the differences?
// ExpressJS: fast, flexible, and simple. Express is a minimal and flexible node.js web application framework,
// providing a robust set of features for building single and multi-page, and hybrid web applications;
// Total.js:
// Framework for creating rich web sites, web applications, e-commerce and real-time applications.
// It is a Framework for Node.js platfrom written in pure JavaScript similar to PHP's Laravel or Python's Django or ASP.NET MVC.
// ExpressJS and Total.js can be categorized as "Microframeworks (Backend)" tools.
// Some of the features offered by ExpressJS are:
// * Robust routing
// * HTTP helpers (redirection, caching, etc)
// * View system supporting 14+ template engines
// On the other hand, Total.js provides the following key features:
// * Super fast development
// * Extremely low maintenance costs
// * Rock solid stability
// ExpressJS and Total.js are both open source tools. ExpressJS with 45.2K GitHub stars and 7.58K forks on GitHub appears to be more
// popular than Total.js with 3.97K GitHub stars and 434 GitHub forks.
// Pros of ExpressJS:
// 377
// Simple
// 333
// Node.js
// 242
// Javascript
// 192
// High performance
// 150
// Robust routing
// 71
// Middlewares
// 70
// Open source
// 57
// Great community
// 36
// Hybrid web applications
// 13
// Well documented
// 9
// Sinatra inspired
// 8
// Rapid development
// 7
// Isomorphic js.. superfast and easy
// 5
// Socket connection
// 5
// Light weight
// 4
// Npm
// 4
// Resource available for learning
// 3
// Event loop
// 3
// Callbacks
// 2
// Data stream
// Pros of Total.js :
// 5
// Fast
// 5
// Rapid development
// 4
// Great support
// 4
// Low-code tools
// 3
// UI components
// 3
// Npm
// 3
// Prebuild apps
// 2
// Javascript
// 2
// Develooment cloud
// 2
// Open Source
// 2
// Node.js
// 1
// Easy to deploy
// 1
// Resource aviable for learning
// ----------------------------------------
// Cons of ExpressJS
// 27
// Not python
// 17
// Overrated
// 14
// No multithreading
// 9
// Javascript
// 5
// Not fast
// 2
// Easily Insecure for Novices
// --------------------------------
// Cons of Total.js
// 3
// Lack of source code documentation
// 2
// Poor design
// 2
// Poor community
// 2
// Messes up global namespace and default prototypes
// 2
// Poor design - 4000 line files
// 2
// Developed as "one man show"
// 1
// Memory leaks
// 1
// Heavy relies on setTimeout
// 1
// Prototype polution
// 1
// Re-invented Lodash poorly
// 1
// In-house bundler allows to commint syntax errors
// 1
// In-house WS client (conflicts with rfc6455 spec)

//! next.js

// what is next js
// Next.js is a flexible React framework that gives you building blocks to create fast web applications.
// pros and cons node js
// pros:
// Bulding fast websites that behaves like dynamic
// greate for user experience
// fast time to market
// cons
// Cost of flexibility – Next JS does not provide many built-in front pages,
//  so you have to create the whole front-end layer from the ground up.
// Development and Management – if you want to use NextJS to build an online store,
// yet you don’t have an in-house team of developers,
// you will need a dedicated person to handle the development and management afterwards.

//! happy

// Express vs. Hapi: The Battle For Being Best Node.js Framework
// Express and Hapi are both based on Node.Js at the core, and that is why it becomes a challenge to choose one of them. Though they have a lot in common, there are some stark differences that one should be aware of. Express is more closely related to Node, and Hapi is a newer framework and yet there are some features in Hapi that make it an exciting choice.
// One of the most significant differences between Hapi or HttpAPI and Express is the presence of middleware. Express needs middleware to parse objects, while Hapi does not need it. Apart from the middleware, many other features differ in Express and Hapi.
// As a CTO or CEO, outlining the two web app development frameworks’ differences becomes vital to make an informed decision. In case you’re looking for an agency to assist you with the decision based on your requirements, consider checking out Simform’s custom web application development offerings.
// Overview of Frameworks – Express vs. Hapi
// What is Express? – An Overview
// Express.js or Express is an open-source server-side framework built for Node.js. Written in Javascript, it is part of MEAN, MEVN, and MERN stacks. Express provides plugins, template code, middleware packages, and routing functionality for faster and efficient web development. Additionally, the framework allows third-party integrations of libraries and features to make customization easier.
// Market Usage Statistics
// A study by BuiltWith shows that Express is the 9th most popular framework in the Top 10k sites.
// SimilarTech reports around 243,997 websites are built with Express worldwide, out of which 47,984 are made exclusively in the US.
// According to a study by Statistics & Data, Express ranks 4th among the top 5 backend frameworks for 2022.
// Use Cases
// Single-page apps
// Reusable apps
// Middleware Applications
// RESTful APIs
// Serve and access static files using a browser
// Enterprise web applications
// eCommerce web applications
// Popular Apps
// Twitter moved to Node.js Express in 2017 to speed up its mobile web app Twitter Lite.
// Uber utilized Express to develop their base web server, Bedrock, and optimize the middleware to provide security, internationalization, and other integrations for its infrastructure.
// Accuweather leveraged Express to build APIs for integration into other apps
// IMDB also applied Express features to create APIs for developers to integrate them into their apps.
// What is Hapi? – An Overview
// Hapi is a Javascript framework that can provide API development opportunities for servers, websites, and HTTP proxy applications. It is an open-sourced Node.Js framework founded by Eran Hammer at Walmart Labs.
// Hapi offers a configuration-centric structure that comes with pre-built caching and authorization features. This framework allows you to develop web applications using Javascript readily. It also comes with built-in authorization schemes like anonymous, basic-auth, cookie-based, and token-based authentication schemes. With Hapi, Walmart handled peak traffic during their Black Friday sale with 10 CPU cores and 28 GB RAM, keeping 0.75% of load idle.
// The Node-based framework also offers client and server-side caching via catbox. Apart from authorizations and caching, it provides API and web application routing.
