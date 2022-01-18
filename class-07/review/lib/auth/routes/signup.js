'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const { Users } = require('../models/users.js');

const router = express.Router();

router.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { 
    console.log(e);
    res.status(403).send("Error Creating User");
  }
});

module.exports = router;
