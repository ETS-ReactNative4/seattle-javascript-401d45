# Class 11: Event Driven Programming

## Feedback

* Better overall than the previous week.
  * Less drowning.
  * Getting used to certain things.
  * Better time management (for students)
  * Some appreciated adjustments.
* Stats:
  * Not enough Code, too many drawings / reviewing topics.
    * I want prioritize the story of the Code / not the Code itself.
    * Spend more time between the 2 ( more equitable breakdown ).
    * Reviewing the video (bring back moments from previous classes).
    * More engaging drawings / same drawings day after day. Revisit as needed.
      * Class vote on what needs revisting.
  * Course is extremely difficult / lots of coursework / disorganized feeling.
    * I / Code Fellows want you to struggle.
    * Working on getting class to end right at 12:00.
      * Deep Dive videos that are optional to help give more support to assist.
    * Questions that are asked, from an office hours ( too much time on questions ).
      * This is on me.
      * Second meeting time.
    * 301 - assignments due date times the same for everything.
    * Schedule for class.
      * more of a rigorous schedule to stick to.
  * There is less support than 301
    * It doesn't seem like there is a ton of feedback from TAs.
    * More difficult / no review.
    * Be quick to give minimal feedback / slow is okay for higher quality.
    * Having to wait a few days for assignments.
  * Nuances feedback
    * Certain assignments require more feedback (Everything that's not code).

## Auth API Presentations

Who is first!!

Team 3: Joey, Kiean, Michael Metcalf.

* Create a subscription service.
  * Users can submit articles, and users are able to share individual stories.

Team 2: Erik, Steve, Matt, and Spencer

* Pokmeon forum (CMS)
  * Non-auth users can read all pokemon.
  * great UML / great related data.

Team 1: Daniel, Jacob, Michael Hendricks, Ryan
  * Simple Message Tracker
    * Admin user to delete users.
    * Time intensive.

Team 4:  Andrew, Kellen, and Dario
  * Role based access to quotes.
  * Full CRUD!!
    * Great responses and tests.

Team 5: Blog / social media app, only got to auth.
  * Way to fail gracefully.

Great job proritizing the backend!!

## Review / Preview

Where we've been:

* HTTP
  * Requests / Response (big change this week, because are leaving this behind)
  * RESTful CRUD.
  * Express.
* Authentication + Authorization
  * Basic - authentication with strings.
  * Bearer - authentication with tokens.
  * Access Control List - who is permitted to do things (based on their token).
    * roles that convert to capabilities: read, write, update, delete.

Where we're headed:

### Event Driven Systems

* A new application paradigm:
  * Pub / Sub (Observer Pattern) design pattern.
    * Publisher / Subscriber.
      * Publisher is a machine / server that allows other machines to subscribe to specific events.
        * Create a list of important events:
          * it's brighter!
          * I'm getting hit by a bus.
      * Subscriber that responds to events.
        * Almost always more than 1.
        * Eyes: on `it's bighter` what do I do?
          * Maybe close myself.
        * Arms: on it's brighter>
          * What's the brightness, if it's over 85
            * Cover face with hands.
    * Leaving bahind the idea request and respond paradigm.
    * Starting to think about real time responsed over many other machines.

## DEMO: Node Events Module

Built in utility to allow other modules to talk to another.
  * Allows us to implement pub/sub behavior.
  * Order in which events occur will not change.
