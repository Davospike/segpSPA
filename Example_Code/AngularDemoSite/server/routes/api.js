const express = require('express');
const router = express.Router();
const data = require('./data.json');
const mongoose = require("mongoose");

const db = mongoose.connection;

var NewsTopicSchema = new mongoose.Schema({
  topicName: String,
  quizquestions: []
});

const quizqus = mongoose.model('QuizQus', NewsTopicSchema, 'newstopics')

function find (name, query, cb) {
  mongoose.connection.db.collection(name, function (err, collection) {
  collection.find(query).limit(1).toArray(cb);
  });
  }

/* GET api listing. */
router.get('/', (req, res) =>{
  res.header("Content-Type",'application/json');
  find('fakeNewsDB',{}, function(err,mdata){
    res.send(JSON.stringify(mdata))});
})

module.exports = router;
