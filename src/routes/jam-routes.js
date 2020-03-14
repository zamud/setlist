const JamController = require('../controllers/jam-controller');

const routes = (app) => {
  app.route('/jam')
    .post(JamController.addNewJam);
}

module.exports = routes;