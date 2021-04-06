//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserAnswerSchema = new Schema({
  user_input: Boolean,
  user_follow_up: Boolean,
  quiz_question: [{type: Schema.Types.ObjectId, ref: 'QuizQuestion'}]
});


// Virtual for userAnswer's URL
UserAnswerSchema
.virtual('url')
.get(function () {
  return '/models/user_answer/' + this._id;
});

//Creating a model from schema we've just made, and exporting it to be used elsewhere
module.exports = mongoose.model('UserAnswer', UserAnswerSchema);

