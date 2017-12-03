const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Cart = new Schema({
	productid    : String,
	productName  : String,
	productPrice : Number,
	salePrice    : Number,
	redPacket    : String,
	productOwner : String,
	productNum   : Number,
	productPic   : String,
	productInfo  : String,
	flag         : Number,
	date 	     : { type: Date, default: Date.now }

})

var CartModel = mongoose.model('cart', Cart);

module.exports = CartModel;