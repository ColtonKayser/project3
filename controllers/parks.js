const express = require('express');
const router = express.Router();
const Parks = require('../models/park.js');

//index
router.get('/', (req, res) => {
  Parks.find({}, (err, foundParks) => {
    res.json(foundParks);
  });
});

//create
router.post('/', (req, res) => {
  Parks.create(req.body, (err, createdPark) => {
    res.json(createdPark);
  });
});

//delete
router.delete('/:id', (req, res) => {
  Parks.findByIdAndRemove(req.params.id, (err, deletedPark) => {
      res.json(deletedPark);
  });
});

//update
router.put('/:id', (req, res) => {
  Parks.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPark) => {
    res.json(updatedPark);
  });
});

module.exports = router;
