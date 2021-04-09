// Dependencies
const express = require('express');
//const db = require('./db');
const router = express.Router();
const mongoose = require("mongoose");

const data = require("../../blockData/newsTopicsOutput");

// Models
const NewsTopic = require("../../models/news_topic");

/* GET api listing. */
router.get('/', async (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
  //const newstopics = await NewsTopic.find();
  //res.send(JSON.stringify(newstopics));
})

module.exports = router;