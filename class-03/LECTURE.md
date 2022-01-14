# Class 03: RESTful Servers with Sequelize (ORM)

## Warm Up

Shredder `.filter` method for filtering our items from an array or object.

## Code Review

What do you need to know to complete the lab?

* Ryan: How do you test your logger
  * You would "mock" the console.log function with jest.

```js
describe('testing the logger', () => {

  console.log = jest.fn();
  logger();
  expect(console.log).toHaveBeenCalled();
});
```

Lab Requirements:

* 1 route: GET /person
  * query string of 'name' on the request
    * if present, return the name as JSON: `{name: 'NAME_GIVEN' }` (200 response)
    * if name is not present, return a 500 status response.
    * if route / method don't match, return a 404.

## RESTful Web Services

[Whiteboard UML](https://projects.invisionapp.com/freehand/document/wVDlxDWOt?saveDraft=true)

## CRUD with Sequelize
