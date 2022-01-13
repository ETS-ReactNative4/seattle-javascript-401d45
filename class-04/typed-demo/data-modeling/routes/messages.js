'use strict';

const express = require('express');

const { MessageCollection } = require('../models');

const router = express.Router();

router.get('/message', async (req, res) => {
  let messages = await MessageCollection.read(req.params.id);
  res.status(200).send(messages);
});
router.post('/message', async (req, res) => {
  let message = await MessageCollection.create(req.body);
  res.statu(201).send(message);
});

module.exports = router;
