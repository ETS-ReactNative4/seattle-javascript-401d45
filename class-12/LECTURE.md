# Class 12: TCP and WebSockets

## Announcments

Ya'll should schedule some time with me!

* 1 on 1 synch: use my calendar link: https://jacobknaack.youcanbook.me

## Warm Up (20 mins)

* PsuedoQueue: Implenting a Queue using 2 stacks.
  * How can we implement?
    * we dont't have to use both Stacks.
      * depeding on which method we want to be more expensive, one method is easy.
    * Kinda made sense, movement of nodes like a tunnel or a bucket.

## Code Review (30 mins)

* Implement specific things
  * CAPS `hub` server - logs all activity
  * vender module - emits a pickup event and logs a delivery confirmation
  * driver module - responds to a pickup, emits in-transit event, and delivered event.
  * eventPool (the thing that the module observe) - holds the key to all events
* Jest mocking / spying.
  * a little bit of javascript tricks.
  * Plus one on testing!!!
* Do the things in the code that wrote do there job?
  * Unit test - does the smallest piece of useful do it's job.
  * Integration test - does our code that we have written integrate into other modules.

## TCP Protocol (30 mins)

A new Protocol for Fcailitate communication between 2 (or more) machines.

* We started with HTTP - which functions using a Request and a Response, these object are abstraction from TCP.
* TCP is lower on the OSI (HTTP is higher), and this HTTP relies on some TCP things to work.
  * TCP is level 4, HTTP is level 7.
  * It is slower than HTTP
  * But it is really good at garuranteeing that all data makes it to your destination ( and can handle more data ).
  * Chops up the data into `packets` and creates a buffer.

What do you need to know about TCP:

* It is a maintained connection
  * once connected to another, data can flow both ways simultaneously.
  * 2 way data flow.
* More machines can connect to the same TCP address.
* Stateful (while HTTP is stateless)
  * Our design patterns change a little bit.

## Socket.io and WebSockets (50 mins)

* WebSockets (a browser implementation of TCP)
  * http -> server address
* ws -> server address that can maintian TCP connections.
  * Socket.io uses web sockets but it is not === websocket.
  * Uses Node events to maintiain an obserable event pool.
    * Also layers in some Web socket conversations.
    * Uses the events to create connections and send data back and forth either between clients or just the server.

## Lab Prep (10 mins)
