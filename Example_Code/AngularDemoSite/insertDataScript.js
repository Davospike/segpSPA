#! /usr/bin/env node

// our URL = 'mongodb://localhost:27017';
// to run this: in project root, node demo mongodb://localhost:27017

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/

var async = require('async')
var QuizQuestion = require('./models/quiz_question')
var NewsTopic = require('./models/news_topic')
var UserAnswer = require('./models/user_answer')


var mongoose = require('mongoose');i
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var quizquestion_arr = []
var useranswer_arr = []
var newstopic_arr = []

// create user answer
function userAnswerCreate(quiz_question, user_input, user_follow_up, cb){

  userAnswerDetail = {
    quiz_question: quiz_question,
    user_input: user_input,
    user_follow_up: user_follow_up
  }

  var userAnswer = new UserAnswer(userAnswerDetail);

  userAnswer.save(function (err) {
     if (err) {
      cb(err, null)
      return
    }
    //console.log('New Author: ' + userAnswer);
    useranswer_arr.push(userAnswer)
    cb(null, quiz_question)
   }  );
}

// create new quiz question
function quizquestionCreate(web_url, postDate, headline, text_body, correct_answer, cb){

   quizQuestionDetail = {
      web_url: web_url,
      postDate: postDate,
      headline: headline,
      text_body: text_body,
      correct_answer: correct_answer,
   }

   var quizquestion = new QuizQuestion(quizQuestionDetail);

   quizquestion.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      //console.log('New Quiz Question: ' + quizquestion);
      quizquestion_arr.push(quizquestion)
      cb(null, quizquestion)
   }  );
}


// create new topic
function newsTopicCreate(topicName, quiz_question, cb) {

  newsTopicDetail = {
    topicName: topicName,
    quiz_question: quiz_question
  }

  var newstopic = new NewsTopic(newsTopicDetail);
  newstopic.save(function (err) {
    if (err) {
      console.log('ERROR CREATING newsTopic: ' + newstopic);
      cb(err, null)
      return
    }
    //console.log('New News Topic: ' + newstopic);
    newstopic_arr.push(newstopic)
    cb(null, quiz_question)
  }  );

}

function createQuizQuestion(cb) {
    async.parallel([
        function(callback) {
          quizquestionCreate('https://www.bbc.co.uk/news/av/world-us-canada-56603312', '2020-01-04', 'Children dropped over US border wall', 'US authorities have released a video showing two children being dropped over a 14ft (4.2 m) wall by alleged smugglers at the US-Mexico border in New Mexico.', true, callback);
        },
        function(callback) {
          quizquestionCreate('https://www.dailystar.co.uk/news/world-news/unknown-disease-turns-bear-cubs-23829469', '2021-03-31', 'Unknown disease that turns bear cubs into friendly "zombies" spreading rapidly in US', 'A mystery virus infecting young black bears in the US states of California and Nevada makes the animals behave in a strangely friendly manner towards humans.', true, callback);
        },
        function(callback) {
          quizquestionCreate('https://www.theonion.com/papa-john-s-comes-under-fire-for-cruel-treatment-of-the-1846204233', '2021-05-21', 'Papa John’s Comes Under Fire For Cruel Treatment Of The Bulbous, Deformed Creatures That Lactate Pizza Sauce', 'Hear why PETA is coming to the defense of these over-bread monstrosities that exist for the sole purpose of having fresh tomato paste extracted from their many teat-like protuberances.', false, callback);
        },
        function(callback) {
          quizquestionCreate('https://ogn.theonion.com/elder-scrolls-update-imminent-todd-howard-s-tracks-s-1846585050', '2021-03-31', '', 'Good tidings, Elder Scrolls fans! It’s been almost a decade since the last release in Bethesda’s beloved fantasy series, but it seems some cool new tidbits about the hotly anticipated sixth installment are just around the bend! Our hounds have been stalking series director Todd Howard through the evening, day in and day out, for nearly a full fortnight, and the tracks from his blood loss suggest he’s slowing down far too quickly to ever outrun us.', false, callback);
        },
        ],
        // optional callback
        cb);
}


function createNewsTopic(cb) {
    async.parallel([
        function(callback) {
          newsTopicCreate('US & Canada', quizquestion_arr[0], callback);
        },
        function(callback) {
          newsTopicCreate('Animals', quizquestion_arr[1], callback);
        },
        function(callback) {
          newsTopicCreate('Health & Fitness', quizquestion_arr[2], callback);
        },
        function(callback) {
          newsTopicCreate('Gaming', quizquestion_arr[3], callback);
        },
        ],
        // optional callback
        cb);
}

function createUserAnswer(cb) {
    async.parallel([
        function(callback) {
          userAnswerCreate(quizquestion_arr[0], true, true, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[0], true, false, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[0], false, true, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[0], false, false, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[1], true, true, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[1], true, false, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[1], false, true, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[1], false, false, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[2], true, true, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[2], true, false, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[2], false, true, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[2], false, false, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[3], true, true, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[3], true, false, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[3], false, true, callback);
        },
        function(callback) {
          userAnswerCreate(quizquestion_arr[3], false, false, callback);
        },
        ],
        // optional callback
        cb);
}

async.series([
    createQuizQuestion,
    createUserAnswer,
    createNewsTopic
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
      //console.log('QuizQuestions: ' +quizquestion_arr);
      //console.log('NewsTopics: ' + newstopic_arr);
      //console.log('UserAnswers: ' +useranswer_arr);
    }
    // All done, disconnect from database
    mongoose.connection.close();
});
