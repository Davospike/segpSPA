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


// if this gets called, we pass it in a parameter (which is the question),
// and this is our signal that they got this question correct. so we need to 
// add 1 to num_correct, and add 1 to num_answered

router.get('/correct', async (req, res) => {

  console.debug('Executing /correct endpoint.');
  res.header("Content-Type",'application/json');
  var id = req.param('id'); 
  console.debug('req ting correct: '+ id)

  const filter = {'_id' : id};
  const updateCorrect = {'num_correct' : 1}
  const updateAnswered = {'num_attempted' : 1}
  const newquizquestions = await QuizQuestion.findOneAndUpdate(filter, updateCorrect, {new:true})
  const newquizquestions1 = await QuizQuestion.findOneAndUpdate(filter, updateAnswered, {new:true})
  await newquizquestions.save().catch(e => {
    console.error('Error occurred in the Correct query.');
    console.error(e);
  });
})

/*
router.get('/correct', async (req, res) => {
  console.debug('Executing /correct endpoint.');
  res.header("Content-Type",'application/json');
  var incr_amount = 1;
  const newquizquestions = await QuizQuestion.findOneAndUpdate({
    'web_url': req.query.result
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
*/

// if this gets called, we pass it in a parameter (which is the question),
// and this is our signal that they got this question incorrect. so we need to 
// add 0 to num_correct, and add 1 to num_answered

router.get('/incorrect', async (req, res) => {
  console.debug('Executing /incorrect endpoint.')
  res.header("Content-Type",'application/json');
  var remain_amount = 0;
  var incr_amount = 1;
  
  var questionID = req.param('id'); 
  console.debug('!!!!!!!!!!!!QUESTION ID = ' + questionID);

  console.debug('req ting incorrect : '+ req.query.result)
  const newquizquestions = await QuizQuestion.findOneAndUpdate({
    '_id': questionID
  },
  {
    $inc: {
      'num_attempted': incr_amount
    },
    $inc: {
      'num_correct': remain_amount
    }
  })
  .catch(e => {
    console.error('Error occurred in the Incorrect query.');
    console.error(e);
  });
  console.debug('Hi vini, just wanted to let you know you got this question: id: '+ req.query.result);
})

module.exports = router;
