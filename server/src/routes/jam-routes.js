const JamController = require('../controllers/jam-controller');

const routes = (app) => {
  app.route('/jams')
    .get((req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, JamController.getJams)
    .post((req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      res.on('finish', () => {
        console.log("STATUS CODE");
        console.log(`${res.statusCode}`);
      });
      next();
    },JamController.addNewJam);

  app.route('/jams/:jamID')
    .get((req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, JamController.getJamWithID)
    .put(JamController.updateJam)
    .delete(JamController.deleteJam);
}

module.exports = routes;