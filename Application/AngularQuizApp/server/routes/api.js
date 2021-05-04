// Dependencies
const express = require('express');
const router = express.Router();
const connectDB = require("../../db");
const data = require("../../blockData/newsTopicsOutput");
connectDB();

// Models
const NewsTopic = require("../../models/news_topic");
const {QuizQuestion} = require("../../models/quiz_question");

// method to get all newsTopics
router.get('/NewsTopics', async (req, res) => {
  console.debug('Executing /newsTopics endpoint.')

  res.header("Content-Type",'application/json');
  const newsTopics = await NewsTopic.find({})
    .then(results => {
      console.debug('NewsTopic(s) queried successfully!');
      console.debug(results);
      return results
    })
    .catch(e => {
      console.error('Error occurred in the NewsTopic query.');
      console.error(e);
    });
  res.send(JSON.stringify(newsTopics));
})


// FUTURE DEVELOPMENT CODE 

// CODE SECTION 1: INDIVIDUAL GET METHODS FOR NEWS TOPIC QUIZZES
// WILL BE USEFUL WHEN DATABASE GETS TO SUFFICIENT SIZE

//CORONAVIRUS

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

//BREXIT

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

//GENERAL

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

//CHINA

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

//CLIMATE CHANGE

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


// CODE SECTION 2: UPDATING USER ANSWER STATISTICS GET METHODS
// NOTE, ALSO TRIED POST METHODS PREVIOUSLY WITH NO LUCK

// if this gets called, we pass it in a parameter (which is the question_id),
// and this is our signal that they got this question correct. so we need to 
// add 1 to num_correct, and add 1 to num_answered

router.get('/correct/:id', async (req, res) => {

  console.debug('Executing /correct endpoint.');
  res.header("Content-Type",'application/json');
  var incr_amount = 1;
  var id = req.param('id');

  const newquizquestions = await QuizQuestion.findOneAndUpdate({
    '_id': id
  },
  {
    $inc: {
      num_attempted: incr_amount
    },
    $inc: {
      num_correct: incr_amount
    }
  })
  .catch(e => {
    console.error('Error occurred in the Correct query.');
    console.error(e);
  });
  console.debug('amounts added' );
})

// if this gets called, we pass it in a parameter (which is the question_id),
// and this is our signal that they got this question incorrect. so we need to 
// add 0 to num_correct, and add 1 to num_answered

router.get('/incorrect/:id', async (req, res) => {

  console.debug('Executing /correct endpoint.');
  res.header("Content-Type",'application/json');
  var incr_amount = 1;
  var incr_amount2 = 0;
  var id = req.param('id');

  const newquizquestions = await QuizQuestion.findOneAndUpdate({
    '_id': id
  },
  {
    $inc: {
      num_attempted: incr_amount
    },
    $inc: {
      num_correct: incr_amount2
    }
  })
  .catch(e => {
    console.error('Error occurred in the Correct query.');
    console.error(e);
  });
  console.debug('amounts added' );
})



module.exports = router;
