var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
    text: String
    created_by: String //{ type: Schema.ObjectId, ref: 'User' },
    created_at: {type: Date, default: Date.now},

});


var userSchema = new mongoose.Schema({
    username: String,
    password: String, //hash created from password
    created_at: {type: Date, default: Date.now}
});



//declaring the models
mongoose.model('Post', postSchema);
mongoose.model('User', userSchema);