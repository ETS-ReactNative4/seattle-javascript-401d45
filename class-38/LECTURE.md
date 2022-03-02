# Class 38: Redux Thunk Middleware

## Warm Up (10 mins)

Prompt: Creating a function that can duplicate a linked list. (given the head node of linked list, create a identical linked list, with all values duplicated).

* Singly linked list!
* Shallow copy!
* Let's keep the orginal unchanged.
* Just return the new linked list.
* No preference on recursion or iterative.

## Review

* TDD of our shopping cart
  * Shopping that gets products added, and updates an inventory in our global state.

## Redux Middleware

refers to functions, that run between the actions being dispatch, and the action object hitting our reducer.

## Redux Thunk

### Why is asychronicity a problem for Redux
