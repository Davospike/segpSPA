//Require Mongoose
var mongoose = require('mongoose');


var OptionsSchema = new mongoose.Schema({
  name: String,
  isCorrectAnswer: Boolean,
  selected: Boolean
});


// Virtual for newsTopics's URL
OptionsSchema
.virtual('url')
.get(function () {
  return '/models/options/' + this._id;
});


//Creating a model from schema we've just made, and exporting it to be used elsewhere
module.exports = mongoose.model('Options', OptionsSchema);