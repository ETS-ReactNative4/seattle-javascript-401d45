# Class 02: Express Features / TDD (Test Driven Development)

## Warm Up

Published a warm up directory: https://github.com/codefellows/seattle-javascript-401d45/tree/main/class-02/warm-up

## Code Review

What is Express?

* A framework!  Gives us access to methods and properties that a server would need to use for a server to respond to requests. (HTTP Server).
* A server that is created from `express()` is an HTTP server.
* `const app = express()` - app can be modified!
  * singleton - creates an object (there can only be one!)
* Express middleware: any function that goes between the request and the response.
  * How does middleware pass the request to the another function?
    * using the `next` function.
  * How does middleware complete the request?
    * by running a method on the `response` object.
* HTTP - Request and Response
  * What is the Request?
    * Something that is requesting data / information!
      * client asking the server to do something.
      * Some object { method, headers, body }
  * What is the Response?
    * The thing that sent back that should contain the data(if any).
      * server's way of of communicating back to the client.
      * An object with methods and properties { body, headers, status }

## Complex Express Applications

Express give you access to the `request` and the `response` as long as we give the framework functions that can get data from the request, and send responses back to the client, express will not give you any issues (unopinonated).

* Supply Server wide middleware.
  * If you need a feature / functinality to happen for every request we can add that using `app.use` at the top of our server file.
    * logging? - let's log ever request that comes through our server

## Testing Features

* More jest and supertest

[UML link](https://projects.invisionapp.com/freehand/document/jtaJE7tV?saveDraft=true)

## Lab Prep
