const Jam = require('../models/jam-model');

const addNewJam = (req, res) => {
  let newJam = new Jam(req.body);

  newJam.save((err, jam) => {
    if(err) {
      res.send(err);
    }
    res.json(jam);
  });
}

module.exports = {
  addNewJam
};