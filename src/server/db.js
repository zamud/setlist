const mongoose = require('mongoose');

mongoose 
  .connect('mongodb+srv://<user>:<pwd>@jam-data-lisib.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,  useUnifiedTopology: true })
  .catch(e => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;