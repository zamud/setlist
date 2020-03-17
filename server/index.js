const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./src/data/db');
const routes = require('./src/routes/jam-routes');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded( {extended: true }));
app.use(cors());
app.use(bodyParser.json());

routes(app);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send(`Server is running on port ${apiPort}`);
});

app.listen(apiPort, () => {
  console.log(`Server running on port ${apiPort}`);
});