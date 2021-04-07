//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var NewsTopicSchema = new Schema({
  topicName: String,
  quizquestions: []
});


// Virtual for newsTopics's URL
NewsTopicSchema
.virtual('url')
.get(function () {
  return '/models/news_topic/' + this._id;
});


//Creating a model from schema we've just made, and exporting it to be used elsewhere
module.exports = mongoose.model('NewsTopic', NewsTopicSchema);
module.exports = NewsTopicSchema;