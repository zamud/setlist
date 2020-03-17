const Jam = require('../models/jam-model');

const getJams = (req, res) => {
  Jam.find({}, (err, jam) => {
    if(err) {
      res.send(err);
    }
    res.json(jam);
  });
}

const addNewJam = (req, res) => {
  let newJam = new Jam(req.body);

  newJam.save((err, jam) => {
    if(err) {
      res.send(err);
    }
    res.json(jam);
  });
}

const getJamWithID = (req, res) => {
  Jam.findById(req.params.jamID, (err, jam) => {
    if(err) {
      res.send(err);
    }
    res.json(jam);
  });
}

const updateJam = (req, res) => {
  Jam.findOneAndUpdate(
    { _id: req.params.jamID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, jam) => {
      if(err) {
        res.send(err);
      }
      res.json(jam);
    });
}

const deleteJam = (req, res) => {
  Jam.findOneAndRemove({ _id: req.params.jamID }, (err, jam) => {
    if(err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted jam' });
  })
}

module.exports = {
  getJams,
  addNewJam,
  getJamWithID,
  updateJam,
  deleteJam
};