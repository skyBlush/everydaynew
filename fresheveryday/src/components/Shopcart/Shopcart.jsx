import React,{Component} from 'react';
import './shopcart.css';
import axios from 'axios';

class Shopcart  extends Component {
	constructor(){
		super();
		this.getCart    = this.getCart.bind(this);
		this.totalPrice = this.totalPrice.bind(this);
		this.check      = this.check.bind(this);
		this.sum        = this.sum.bind(this);
		this.calone        = this.calone.bind(this)
		this.calall        = this.calall.bind(this)
		this.state      = {
			list : []
		}
	}
	reduce(e){
		var next = e.target.nextElementSibling;
		next.innerHTML--;
		if (next.innerHTML<1) {
			next.innerHTML = 1
		}
		this.calone()
	}
	add(e){
		var previous = e.target.previousElementSibling;
		previous.innerHTML++;
		this.calone()
	}
	componentDidMount(){
		this.getCart();
	}
	totalPrice(){
		
	}
	calone(){
		console.log("hhah");
		var products = document.querySelectorAll('.products');
		var price = document.querySelectorAll('.price span');
		var num = document.querySelectorAll('.total');
		var pricy = []
		for(var i=0;i<products.length;i++){	
			if (products[i].children[0].firstChild.firstChild.className==='check checked') {
				pricy.push(price[i].innerHTML*num[i].innerHTML)		
			}
		}
		var length = pricy.length;
		var sum=0;
		for(var x=0;x<length;x++){
			sum += pricy[x];
		}
		console.log(pricy)
		console.log(sum)
		document.querySelector('.summary span').innerHTML = '合计 : '+sum
		return pricy;
	}
	calall(){
		var checked = document.querySelectorAll('.checked').length;

	}
	check(e){

		if(e.target.getAttribute('data-checked')){
			e.target.setAttribute('data-checked','');
			e.target.className = 'check'
			this.calone()
		}else{
			e.target.setAttribute('data-checked','data-checked');
			e.target.className += ' checked';
			var all = document.querySelectorAll('.products').length;
			this.calone()
		}
		this.sum(e)
		// this.calone
	}
	
	sum(e){
		var product = document.querySelectorAll('.products');
		var productCount = product.length;
		var check = document.querySelectorAll('.check span');
		var checkCount = 0;
		for(var i = 0; i<check.length; i++){
			if(check[i].getAttribute('checked')){
				checkCount ++
				console.log(checkCount)
			}
		}
	}
	getCart(){
		var username = localStorage.getItem('username')
		
		axios.post('/users/getShopCart',{
			productOwner:username
		})
		.then((res)=>{
			console.log(res.data.docs);
			this.setState({
				list : res.data.docs
			})
			this.calone();
		})
		.catch((err)=>{
			console.log(err);
		})
	}
	render(){
		return (
			<div className="shopcartPage">
				<div className="place">
					<i className="iconfont">&#xe611;</i>
					<span>北京</span>
					<i className="iconfont">&#xe632;</i>
				</div>
				<div className="postPrice">
					<div className="check">
						<span></span>
					</div>
					<div className="arrive">
						<p>次日达</p>
					</div>
					<div className="free">
						<p>免邮费</p>
					</div>
				</div>
				{
					console.log(this.state.list),
					this.state.list.map((item,index)=>{
						return (
							<div className="products">
								<div className="item">
									<div className="check">
										<span onClick={(e)=>{this.check(e)}} data-checked="checked" className="check checked"></span>
									</div>
									<div className="img">
										<img src={item.productPic} alt=""/>
									</div>
									<div className="info">
										<p className="title">{item.productInfo}</p>
										<p className="redpacket">{item.redPacket}</p>
										<p className="vip">邮箱会员价￥<span>{item.salePrice}</span></p>
										<p className="price">商城价￥<span>{item.productPrice}</span></p>
									</div>
									<div className="num">
										<span id="reduce" onClick={(e)=>{this.reduce(e)}}></span>
										<span className="total">{item.productNum}</span>
										<span id="add" onClick={(e)=>{this.add(e)}}></span>
									</div>
								</div>
							</div>
						)
					})
				}
				<div className="totalPrice">
					<p>商品总价<span className="allprice"></span></p>
				</div>
				<div className="summary">
					<span onClick={this.calone}>合计 : </span>	
				</div>
				<div className="vipCard">
					<div className="title">
						<div className="img">
							<img src="https://j-image.missfresh.cn/img_20171028224101960.png" alt=""/>		
						</div>
						<div className="text">
							<pre>开通会员可得<span>红包</span></pre>
							<pre>本单更省<span>40</span>元+返<span>3.92元</span>
							</pre>
						</div>	
					</div>
					<div className="saleMonth">
						<div className="img">
							<img src="https://j-image.missfresh.cn/img_20171115104617893.png" alt=""/>
							<span></span>	
						</div>
						<div className="buy">
							<span></span>
						</div>	
					</div>
					<div className="saleMonth">
						<div className="img">
							<img src="https://j-image.missfresh.cn/img_20171115104729535.png" alt=""/>
							<span></span>	
						</div>
						<div className="buy">
							<span></span>
						</div>	
					</div>
					<div className="saleMonth">
						<div className="img">
							<img src="https://j-image.missfresh.cn/img_20171115104756101.png" alt=""/>
							<span></span>	
						</div>
						<div className="buy">
							<span></span>
						</div>	
					</div>
				</div>
			</div>	
			)
	}
}

export default Shopcart;