const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./src/data/db');
const routes = require('./src/routes/jam-routes');
const path = require('path');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded( {extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')))

routes(app);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send(`Server is running on port ${apiPort}`);
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
});

app.listen(apiPort, () => {
  console.log(`Server running on port ${apiPort}`);
});