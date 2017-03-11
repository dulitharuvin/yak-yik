/**
 * Created by Dulitha RD on 3/7/2017.
 */
/**
 * Created by Dulitha RD on 3/7/2017.
 */
var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    username: {type:String, default:''},
    body: {type:String, default:''},
    timestamp: {type:Date, default:Date.now}
});

module.exports = mongoose.model('CommentSchema', CommentSchema)