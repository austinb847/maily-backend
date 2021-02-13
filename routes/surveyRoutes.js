const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.export = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

  });
};