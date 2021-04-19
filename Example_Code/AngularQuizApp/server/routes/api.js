// Dependencies
const express = require('express');
const router = express.Router();
const connectDB = require("../../db");

const data = require("../../blockData/newsTopicsOutput");

connectDB();

// Models
const NewsTopic = require("../../models/news_topic");
const QuizQuestion = require("../../models/quiz_question");
// const Options = require("../../models/options");

router.get('/quiz/Coronavirus', async (req, res) => {
  console.debug('Executing /newsTopics endpoint.')

  res.header("Content-Type",'application/json');
  const newsTopics = await NewsTopic.find({'topicName' : 'Coronavirus'})            // change string in value element from Coronavirus to whatever topic needed
    .then(results => {
      console.debug('NewsTopic(s) queried successfully!');
      console.debug(results);
      return results
    })
    .catch(e => {
      console.error('Error occurred in the NewsTopic query.');
      console.error(e);
    });
  res.send(JSON.stringify(newsTopics, null, 2));
})

router.get('/quiz/Brexit', async (req, res) => {
  console.debug('Executing /newsTopics endpoint.')

  res.header("Content-Type",'application/json');
  const newsTopics = await NewsTopic.find({'topicName' : 'Brexit'})            // change string in value element from Coronavirus to whatever topic needed
    .then(results => {
      console.debug('NewsTopic(s) queried successfully!');
      console.debug(results);
      return results
    })
    .catch(e => {
      console.error('Error occurred in the NewsTopic query.');
      console.error(e);
    });
  res.send(JSON.stringify(newsTopics, null, 2));
})

router.get('/quiz/General', async (req, res) => {
  console.debug('Executing /newsTopics endpoint.')

  res.header("Content-Type",'application/json');
  const newsTopics = await NewsTopic.find({'topicName' : 'General'})            // change string in value element from Coronavirus to whatever topic needed
    .then(results => {
      console.debug('NewsTopic(s) queried successfully!');
      console.debug(results);
      return results
    })
    .catch(e => {
      console.error('Error occurred in the NewsTopic query.');
      console.error(e);
    });
  res.send(JSON.stringify(newsTopics, null, 2));
})

router.get('/quiz/China', async (req, res) => {
  console.debug('Executing /newsTopics endpoint.')

  res.header("Content-Type",'application/json');
  const newsTopics = await NewsTopic.find({'topicName' : 'China'})            // change string in value element from Coronavirus to whatever topic needed
    .then(results => {
      console.debug('NewsTopic(s) queried successfully!');
      console.debug(results);
      return results
    })
    .catch(e => {
      console.error('Error occurred in the NewsTopic query.');
      console.error(e);
    });
  res.send(JSON.stringify(newsTopics, null, 2));
})

router.get('/Climate-change', async (req, res) => {
  console.debug('Executing /newsTopics endpoint.')

  res.header("Content-Type",'application/json');
  const newsTopics = await NewsTopic.find({'topicName' : 'Climate Change'})            // change string in value element from Coronavirus to whatever topic needed
    .then(results => {
      console.debug('NewsTopic(s) queried successfully!');
      console.debug(results);
      return results
    })
    .catch(e => {
      console.error('Error occurred in the NewsTopic query.');
      console.error(e);
    });
  res.send(JSON.stringify(newsTopics, null, 2));
})


// if they got it correct

// here, update the fields
const filter = {'web_url' : 'https://metro.co.uk/2020/04/02/north-korea-claims-0-coronavirus-cases-global-count-reaches-one-million-12498221/'}
const updateCorrect = {'num_correct' : 1}
const updateAnswered = {'num_attempted' : 1}


//const updateStats2 = QuizQuestion.findOneAndUpdate(filter, updateAnswered)

// then present message in localhost:3000/quizquestion1/correct
router.get('/newsTopics/quizquestion1/correct', async (req, res) => {
  console.debug('Executing /newsTopics endpoint.')

  res.header("Content-Type",'application/json');
  const updateStats1 = await QuizQuestion.findOneAndUpdate(filter, updateCorrect)
  await updateStats1.save()
  const quizquestions = await QuizQuestion.find({'web_url' : 'https://metro.co.uk/2020/04/02/north-korea-claims-0-coronavirus-cases-global-count-reaches-one-million-12498221/'})           
    .then(results => {
      console.debug('NewsTopic(s) queried successfully!');
      console.debug(results);
      return results
    })
    .catch(e => {
      console.error('Error occurred in the NewsTopic query.');
      console.error(e);
    });
  res.send(JSON.stringify(quizquestions, null, 2));
})

module.exports = router;
