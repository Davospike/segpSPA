// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const path = require('path');

// Models
const NewsTopic = require('../../models/news_topic.js');

router.get('/', (req, res) =>{
  res.header("Content-Type",'application/json');
  NewsTopic.find({}).exec(function (err, news_topic){
    res.render('/', {
      news_topic: news_topic
    });
  });
});

/*function find (name, query, cb) {
  mongoose.connection.db.collection(name, function (err, collection) {
  collection.find(query).limit(1).toArray(cb);
  });
  }*/


  

/* GET api listing. */
/*router.get('/', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})*/

/*
// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
                      axios.get(`${API}/posts`)
                        .then(posts => {
                          res.status(200).json(posts.data);
                        })
                        .catch(error => {
                          res.status(500).send(error)
                        });

});*/



/* GET api listing. */
/*router.get('/', (req, res) =>{
  res.header("Content-Type",'application/json');
  find('fakeNewsDB',{}, function(err,mdata){
    res.send(JSON.stringify(mdata))});
})*/

module.exports = router;
