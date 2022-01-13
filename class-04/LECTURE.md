# Class 04: Data Modeling

## Warm Up / Review

* Kellen: How to solve Code Challenge (Code Challege 03)
  * Let's talk about it.

`app.get('/message/:id`, (req, res) => {
  
  request.params.id;
  request.query.name;

});`

GET http://localhost:3000/messages/12?name=banana

* Daniel: functional vs object oriented programming.
  * OOP thinks of objects as the corner stone for any solutiono
    * each object is defined by its properties and methods.
  * Functional programing considers pure bahavior as the corner stone.
    * returning values that can be used with other functions.
    * Objects can be mutated, functional programming tries to aviod mutation.

### Debrief

How did it go?

* Joey: interesting???
* Andrew: a lot more than our brains our ready for.
  * Trying to digest a lot of material
    * What is important and what is not.
* Daniel: Deleting a record.
  * tests are passing but the "suite" is failing.
  * What is the expected return?

## Data Modeling

up until now we have only been creating tables that have no associated data

* Food { name, calories }
* Clothes { name, size, type }
  * This data is not related but SQL is really really good at maintaining data that is relational.
* Messages { text, authorId }
* Authors { name }
  * This data is related as messages belong to an author. So SQL can make an assocation.

## SQL Queries

![Whiteboard UML](/assets/UML.png)

## Collection Class

An abstraction of our CRUD to repeatable class.

```js

class Collection {

  constructor(mode) {
    this.model = model;
  }

  read() {

  }

  create() {

  }

  update() {

  }

  remove() {

  }
}

```
