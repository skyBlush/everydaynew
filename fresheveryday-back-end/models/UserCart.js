const mogoose = require('mongoose');

var Schema = mongoose.Schema;

var Cart = new Schema({
	productName  : String,
	productPrice : Number,
	salePrice    : Number,
	redPacket    : String,
	productOwner : String,
	productNum   : Number,
	productPic   : String,
	productInfo  : String,
	flag         : 1

})

var CartModel = mongoose.model('cart', Cart);

module.exports = CartModel;