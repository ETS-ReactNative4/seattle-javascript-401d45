# Class 39: Advanced Redux (redux toolkit)

## Announements

Whiteboard exams are openning up next week.

* Other instructors will schedule you between 2:00 PM PST and 6:00 PM PST (Monday through Friday).

## Warm Up

Prompt: Find the leaf with the largest value in a Binary Tree, using recursion.

* Nodes will only contain integers.
* Given the root node.
* return the value.
* There might be negative numbers.

## Review

* What's so special about async redux actions?
  * redux is not designed to handle functions.
  * redux wants an action (type + payload).
* How do we overcome this?
  * The thunk!
  * Middleware that checks whether the action is a function or an object.
  * What is Redux Middleware?
    * Something that happens between dispatching an action, and the action hitting our reducer.
* TDD testing with msw (mock service worker)

## Alternatives to Redux (20 minutes)

Redux is very prevalent in the industry for it's unopinionated syntax
* We have a lot of control over our logic.
  * As long as we pass action objects (type, payload) into our reducer everythin will be fine.
* Something that is more opinionated systax, we are forced to play more rules.

## Redux Toolkit (50 minute)
