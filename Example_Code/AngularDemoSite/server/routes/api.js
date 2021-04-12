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

//console.log(newstopics);

/* GET api listing. */
// router.get('/', async (req, res) => {
//   res.header("Content-Type",'application/json');
//   console.log(newstopics);
//   res.send(JSON.stringify(data.toarray));
//   //const newstopics = await NewsTopic.find();
//   //res.send(JSON.stringify(newstopics));
// })

router.get('/newsTopics', async (req, res) => {
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


module.exports = router;