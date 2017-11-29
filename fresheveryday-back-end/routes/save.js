var express = require('express')
var router = express.Router();
var ProductModel = require('../models/ProductModel.js')

router.post('/',(req,res,next)=>{
	var result = {
		code:1
	}
	var data = new ProductModel();
	data.title = req.body.title;
	data.detail = req.body.detail;
	data.redpacket = req.body.redpacket;
	data.prime = req.body.prime;
	data.sale = req.body.sale;
	data.img = req.body.img;
    data.save((err)=>{
    	if (err) {
			result.code = -200;
			result.message = '保存失败';
			res.send(JSON.stringify(result));
    	}else{
    		result.message = '保存成功';
    		res.send(JSON.stringify(result));
    	}
    })
})
module.exports = router;
