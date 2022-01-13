'use strict';

const express = require('express');
const { SquiseaudartModel } = require('../models/index.js');

const router = express.Router();

const read = async (req, res) => {
  let squiseaudartReturn = await SquiseaudartModel.findAll();
  res.status(200).send(squiseaudartReturn);
};
const create = async (req, res) => {
  const data = req.body;
  const record = await SquiseaudartModel.create(data);
  res.status(200).json(record);
};
const update = async (req, res) => {
  let id = req.params.id;
  let newRecord = req.body;

  let recordToUpdate = await SquiseaudartModel.findByPk(id); // pk is primary key
  recordToUpdate.set(newRecord);
  await recordToUpdate.save();

  res.status(200).send(recordToUpdate);
};
const remove = async (req, res) => {
  res.send('working on it');
};

router.get('/squiseaudart', read);
router.post('/squiseaudart', create);
router.put('/squiseaudart/:id', update);
router.delete('/squiseaudart', remove);

module.exports = router;
