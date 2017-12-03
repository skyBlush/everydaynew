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
router.post('/findid',(req,res,next)=>{
	ProductModel.find({_id:req.body.id},(err,docs)=>{
		var result={
			code:1
		}
		if (err||docs.length===0) {
			result.code= -500;
			result.message = 'id查询出错了'
			console.log(result)

			res.send(JSON.stringify(result))
		}else{
			result.docs = docs
			console.log(result)
			res.send(JSON.stringify(result))
		}
	})
})
router.post('/find',(req,res,next)=>{
	var result={
		code:1
	}
	ProductModel.find({},(err,docs)=>{
		console.log(docs)
		if (err||docs.length===0) {
			result.code=-400;
			result.message = '未查询到数据'
			res.send(JSON.stringify(result))
		}else{
			result.message="查询成功"
			result.docs =docs
			res.send(JSON.stringify(result))
		}
	})
})
module.exports = router;
