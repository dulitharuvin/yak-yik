/**
 * Created by Dulitha RD on 3/7/2017.
 */
var mongoose = require('mongoose');

var ZoneSchema = new mongoose.Schema({
    name: {type: String, default:''},
    zipCodes: {type:Array, default:[]},
    timestamp: {type:Date, default:Date.now}
});

module.exports = mongoose.model('ZoneSchema', ZoneSchema)