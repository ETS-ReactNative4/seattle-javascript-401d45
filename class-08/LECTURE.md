# Class 08: Authorization

## Review / Warmup

[See Whiteboard diagrams](https://projects.invisionapp.com/freehand/document/RyNZW4xP5?saveDraft=true)

## Authentication with Authorization

Where we've been

* Basic and Bearer authentication.
  * Who are you?
  * Basic = strings, Bearer = token.
* Middlewares worked next to each, we don't authenticate with both in the same route.

Today, we still need our basic and bearer auth to work together.
  
* How can we tell a user whether or not they are "permitted".
* Authorization: Are you allowed?
* Encode some stuff into our token.
* Create a system (our own home grown) - access control list.
  * What `role` does a user have?
  * What `capabilities` are assigned to a given role.
* Only helpful after we have authenticated.
* This has to occur after we have authenticated.

### Access Control Lists

Each user on our system currently has

* username
* password
* token
* role: for your system, how many types are required.
  * Admins that can do anything.
  * manager: `create` `read` `update` but not delete.
  * default Users: that can only do 1 or very few things.
  * editors: that can only `update` but not `create`.
  * writers: that can only `create` but not `update`.

* Each role maps to a list of `capabilites`.
  * User: [`read`]
  * Admin: [`create`, `read`, `update`, `delete`]
  * Editor: [`read`, `update`]
  * Writer: [`read`, `create`]
