const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const Survey = mongoose.model('surveys');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {

  app.get('/api/surveys/feedback', (req, res) => {

    res.send('Thanks for the feedback!');
  });



  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email=> {return { email: email.trim() }}),
      _user: req.user.id,
      dateSent: Date.now()
    });

    //send email through sendgrid helper mailer class
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send(); //send email
      await survey.save(); //save survey to db
      req.user.credits -= 1; // update user credits
      const user = await req.user.save(); //save updated user

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};