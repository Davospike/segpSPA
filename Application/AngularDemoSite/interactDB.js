const mongoose = require('mongoose');
//const db = require('./db');
const NewsTopic = require("./models/news_topic")

const newstopics = NewsTopic.find();
console.log(newstopics);

/*
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


function find (name, query, cb) {
    mongoose.connection.db.collection(name, function (err, collection) {
       collection.find(query).toArray(cb);
   });
}

//simply do find(collection_name, query, callback); to be given the result.
//for example, if I have a document { a : 1 } in a collection 'foo' and I want to list its properties, I do this:

find('newstopics', {topicName : "Coronavirus"}, function (err, docs) {
            console.dir(docs);
        });

//output: [ { _id: 4e22118fb83406f66a159da5, a: 1 } ]
*/