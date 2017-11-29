var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    title       : String,
    detail      : String,
    redpacket 	: String,
    prime 		: Number,
	sale 		: Number,
	img 		: String,
    date: { type: Date, default: Date.now }
});
var ProductModel = mongoose.model('product', Product);
module.exports = ProductModel;