# Class 07: Bearer Authentication

If `basic` auth uses strings, `bearer` is designed to use a token.

* we are still attaching an encoded string onto the header
* we are still decoding it and authenticating.
* Our encoded string will now be a token -> JSON Web Token.

## What is a JWT?

* It is credentials, but we can control the features of these credentials.
  * We can make them one time use
  * We can make them timed.
  * And we can validate with a server secret.
    * Has someone messed with the encoding?
    * We get to decide what information is encoded.
  * Each token is signed with a secret string.


### Sequelize Virtual property

* A property that is not stored in our SQL table.
* Derived using values stored in the table
  * Uses special type of function called a `getter`

```js

let User = await Users.create(username, password);

User.token // returns a property derived from stored data == iuasdhfiluashdf.982374987245 

```
