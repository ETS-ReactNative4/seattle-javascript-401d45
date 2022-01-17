# Class 06: Authentication

## Feedback and Review

How did things go last week?

specific feedback:

* I am overwhelmed with material / we move from topic to topic very quickly.
  * We do not expect you to feel like you've learned 100% of the things we expose you to.
  * I don't know very many engineers that don't feel overwhelmed with the amouihnt of work that they need to do.
  * There is a ton of material, and we need to expose you to the important parts.
* Why are there 3 different places to look up submission instructions?
  * This is to reduce duplication.
  * This is uncomforable for learning, and maybe feel overwhelming.
* Can we reduce classes that go overtime / can we get advance.
  * I will try my best to anticipate this.
  * I need to make sure that a certian amount of the material is in the recording.
  * Jacob will try - I don't want things absolutely required to complete lab, in a second lecture period.
* There is a ton of information, lots of detail, maybe even too much.
  * I go on tangents, I will try and be better.
  * Important information will be called out more, not as much time going into fine detail.

### Important Things from last week:

* HTTP
  * Web Server protocol, standard for computers to talk to each other
    * Request - there is a method! (GET , PUT, POST, DELETE, PATCH) what a computer sends to an HTTP server to do something.  This could be for anything.
    * Response - From the server to the client, provide the client with information about the request they just made.  Acknowledement of job well done/ or not.
* Express
  * A framework that operates within Node JS, for HTTP server.
    * Routing - how express handles everything needed to put together a response.
      * Method/route path and a callback function to run when those match.
    * Middleware - functions that execute during the lifecycle of a request to the Express server.
      * In express we use the next function to call the 'next' middleware inline.
      * Can middleware happen in one direction?
        * In express, yes.
    * Error handling - uses a middleware function. Error handles calls the error by passing an error as an argument into the `next` function.
      * The middleware being used as and error handler, needs an `error` parameter.
* SQL and Sequelize
  * What is SQL?
    * A database that stores information in tables with rows.
    * Is relational, data records (rows) are related to data in other tables.
      * SQL doesn't allow you to delete data that is related between tables.
  * What is a Sequelize Model?
    * The blueprint (data values) for an item in the database.
    * Defines a whole table. (Model = Table)
    * each data type = column.
    * Create an instance of the model with values = Row in SQL.
* Modularization
  * Refactoring - Re-writing something (but doesn't change the behavior), cleaning things up, not repeating.
  * Abstraction - Cleaning up / hiding details that aren't needed.
    * Taking behavior that is important, providing a generic way to do the same thing in multiple places in your code base.
    * Hiding complexity.
    * Blueprint filter, that may need to done in other places in our app.
    * See better where you have repitition.  
      * Used to increase efficiency (maintainability).

## What is Authentication?

Who are you?

* Can you prove to me who you are.
* Webiste / profile information / banking data / facebook images.
* Every server needs to know who the user is that they are trying to fullfill a specific requests.

How do computers know who is making a request?

* UserID - what is this?? 1
  * What if user 2 says they are user 1!
* JWT - jason web token (a hashed string).
* Username plus a password.
* IP address - do I recognize this computer?
* Finger prints
* Retina scans / facial recognition.
* MFA
  * send an text message with a code.
  * send an email with a verification string.

## Encoding vs Encryption

Encoding - standarized way of wrapping up data (not for hiding data).

* base64 (turning each character into something else).
* only uses specific characters.
Encypting - Hiding of information and making it hard to read.
* This process will be one way, and will look differenet every time you encrypt.
* Very hard to make any sense of an encrypted string.
* One way, we will not be able to decrypt.
* We will use a library that can compare.

## Basic Authentication

Authentication using strings (username plus password).
