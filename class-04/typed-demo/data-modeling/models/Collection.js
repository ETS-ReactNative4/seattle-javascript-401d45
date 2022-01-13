'use strict';

class Collection {
  constructor (model) {
    this.model = model;
  }

  async read(id, association) {
    let options = {};
    if (association) {
      options.include = association;
    }

    let records = await this.model.findAll(options);
    // res.status(200).send(records);
    return records;
  }
  async create(data) {
    // const data = req.body;
    const record = await this.model.create(data);
    // res.status(200).json(record);
    return record;
  }
  async update(id, newRecord) {
    // let id = req.params.id;
    // let newRecord = req.body;

    let recordToUpdate = await this.model.findByPk(id); // pk is primary key
    recordToUpdate.set(newRecord);
    await recordToUpdate.save();

    // res.status(200).send(recordToUpdate);
    return recordToUpdate;
  }
  remove() {
    
  }
}

module.exports = Collection;
