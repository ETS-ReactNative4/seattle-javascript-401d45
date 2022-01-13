# Warm Up

CRUD with Express and Sequelize

Your team has been tasked with building a feature onto an existing **Express HTTP Server** with full **CRUD** performed on data in a **SQL database** using **Sequelize**.

Your team needs to complete the **`squiseaudart`** feature.  In order to complete this feature your team will need to do the following:

1. Create a **`squiseaudart`** Model with **Sequelize**
    * Define any and all properties belonging to a **`squiseaudart`**.  Be creative!
    * Configure and export your `Sequelize.Model`.
2. Create an **Express Router** that handle Client Requests send to `/squiseaudart` for all CRUD operations.
    * Create a `GET` method that can `read` records from your database.
    * Create a `POST` method that can `create` a record from your database.
    * Create a `PUT`/`PATCH` method that can `update` a record from your database
    * Create a `DELETE`  method that can `delete` a record from your database.
3. Please use correct status code for responses sent back to the client, and all response bodies should contain JSON.
4. Provide validation in the form of tests or screenshots of completed requests.
