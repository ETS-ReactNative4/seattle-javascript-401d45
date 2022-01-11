# Class 01: Course Intro / Node Environment

## Course Logistics

### Canvas

* What is due everyday?
  * Reading
  * Lab (Except for Friday)
  * Code Challenge
  * Learning Journal
* What is due every week?
  * Feedback
  * Career Coaching Workshop
  * Data Structure Implementation

Please DM me / let me know if you are having Canvas Problems.

### Github - https://github.com/codefellows/seattle-javascript-401d45

* All materials will be published
  * Config files
  * Demo code
  * Lab instructions
  * Illustrations that we create will be linked here.
  * Notes that Jacob takes
* Continuous Integration
  * This will run our tests / build / deploy will run automagically.

### Whiteboarding / Code Challenges

This course requires that you break abstract problems down to into specific details

* Lots of drawing
* A number of things we want you to practice

1. Understanding / coming up with the details of a problem (asking questions about a particular domain)
2. Think about solutions algorithmically
   * What is a list of things you need to perform to solve.
3. Think in terms of computer operations
   * set variables
   * reassign pointers / variables
   * run loops
   * perfrom CRUD
4. Write syntatically correct Code.

![whiteboard example](/assets/whiteboard.png)

Every thursday's Code Challenge is meant to be done only on a "whiteboard".

## Writing Code within Node

Code running in node follows a couple of rules

* Every program / application has an export and potential imports
  * local files can export an object that can be run from other "modules" in files on you local machine
  * export - `module.exports`
    * single object that is made available to other "modules"
  * import = `require()`
    * if present in a "module" it will return that modules exports.

## Lab Prep

Walk through of all the things you need for most labs in the first half.  All our code will go to github and be executed via Virtual Machine provisioned by Heroku.

### Repo Setup

At the start of every week, we'll creating and configuring our github repos.

### Express Review

Express uses the singleton pattern to allow developers to modify the HTTP Server code.

* Singleton: a single object (there can only be one!) that is generated and able to be modified.

Express route methods:

* take 2 parameters
  * Route - string
  * Callback function - tells the route to do, using 2 params: Request and the Response

![Express middleware handlers](/assets/middleware.png)

### Testing and Deployment

Deployed Repo: https://github.com/JacobKnaack/express-server-deployment/tree/express
