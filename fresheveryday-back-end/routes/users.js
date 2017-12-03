var express = require('express');
var router = express.Router();
var UserModel = require('../models/UserModel');
var UserCart = require('../models/UserCart');

/* GET users listing. */
router.post('/register', function(req, res, next) {
	UserModel.find({username:req.body.username},(err,docs)=>{
		var result={
			code:1
		}
		if (err||docs.length>0) {
			result.code = -100;
			res.message = '用户名已存在';
			res.send(JSON.stringify(result));
		}else{
			var newuser = new UserModel();
			newuser.username = req.body.username;
			newuser.psw = req.body.psw;
			newuser.tel = req.body.tel;
			newuser.save((err)=>{
				if (err) {
					result.code = -101;
					result.message = '保存失败'
					return
				}
			})
			result.message = '注册成功'
			res.send(JSON.stringify(result))
		}

	})
});

router.post('/login',(req,res,next)=>{
	UserModel.find({username:req.body.username,psw:req.body.psw},(err,docs)=>{
		var result ={
			code:1
		}
		if (err||docs.length===0) {			
			result.code=-102;
			result.message='登录失败';
		}else{
			result.message = '登陆成功';
			result.username = req.body.username;
			req.session.username = req.body.username;
		}		
		res.send(JSON.stringify(result))
	})
})

router.post('/addToCart',(req,res,next)=>{
	var result = { code:1 }
	UserCart.find({productid:req.body.id},(err,docs)=>{
		if(err || docs.length!==0){
			UserCart.update({productid:req.body.id},
				{productNum:req.body.productNum},
				(err)=>{
					if(err){
						code=-100;
						result.message = '添加失败';
					}else{
						result.message = '添加成功';
						res.send(JSON.stringify(result));
					}
				}	
				)
		}else{
			var addToCart = new UserCart();	
			addToCart.productid    = req.body.id;	
			addToCart.productName  = req.body.productName;
			addToCart.productPrice = req.body.productPrice;
			addToCart.salePrice    = req.body.salePrice;
			addToCart.redPacket    = req.body.redPacket;
			addToCart.productOwner = req.body.productOwner;
			addToCart.productNum   = req.body.productNum;
			addToCart.productPic   = req.body.productPic;
			addToCart.productInfo  = req.body.productInfo;
			addToCart.flag         = 1;
			addToCart.save((err)=>{
				if(err){
					result.message = '添加失败';
					return;
				}
				result.message = '添加成功';
				res.send(JSON.stringify(result));
			})
		}
	})
})

router.post('/getShopCart',(req,res,next)=>{
	var result = { code:1 }
	UserCart.find({productOwner:req.body.productOwner,flag:1},(err,docs)=>{
		if(err || docs.length === 0 ){
			result.message = '购物车没有商品';
		}else{
			result.message = '获取成功'
			result.docs = docs;
		}
		res.send(JSON.stringify(result));
	})
})

router.post('/delProduct',(req,res,next)=>{
	var result = { code:1 };
	UserCart.find({id:req.body.id},(err,docs)=>{
		if(err || docs.length ===0 ){
			result.message = '服务器出错'
		}else{
			UserCart.update({id:req.body.id},{flag:0},(err)=>{
				if(err){
					result = '删除失败';
				}else{
					result = '更新成功';
				}
				res.send(JSON.stringify(result));
			})
		}
	})
})
router.post('/update',(req,res,next)=>{
	var result = { code:1 };
	console.log('update')
	UserCart.update({productid:req.body.id},{productNum:req.body.productNum},(err)=>{
		if(err){
			result = -101;
			result = '更新数量失败';
			console.log(err)
			console.log(req.body.productNum)
			return;
		}else{
			result = '更新数量成功';
		}
	})
	res.send(JSON.stringify(result));
})

module.exports = router;
