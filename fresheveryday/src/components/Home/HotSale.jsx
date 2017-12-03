import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Carousel from './Carousel'
import './hotsale.css';
import './fruit.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	NavLink,
	Link
} from 'react-router-dom';
import Detail from './Detail';

class HotSaleUI extends Component {
	constructor(){
		super();
		this.addToCart = this.addToCart.bind(this);
		this.update = this.update.bind(this);
		this.add = this.add.bind(this);
		this.reduce = this.reduce.bind(this);
	}
	componentDidMount(){
		if(this.props.Fruitpro.length === 0){
			this.props.addTodo();
		}
	}
	addToCart(e,id,img,title,detail,redpacket,prime,sale){
		var username = localStorage.getItem('username');
		e.target.className += ' hidden'
		var parent = e.target.nextElementSibling
		parent.className = 'num';
		console.log(id)
		var count = parent.querySelector('.count').innerHTML = 1;
		axios.post('/users/addToCart',{
			productName   : title, 
			productPrice  : prime,
			salePrice     : sale,
			redPacket     : redpacket,
			productPic    : img,
			productInfo   : detail,
			id            : id,
			productOwner  : username,
			productNum    : count 
		})
		.then((res)=>{
			console.log(res)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	add(e,id){
		var count = parseInt(e.target.previousElementSibling.innerHTML);
		count++;
		e.target.previousElementSibling.innerHTML = count;
		console.log(id)
		this.update(count,id);
	}
	reduce(e,id){
		var count = parseInt(e.target.nextElementSibling.innerHTML);
		var parent = e.target.parentNode;
		var img = parent.previousElementSibling;
		count--;
		if(count < 1){
			parent.className += ' hidden' ;
			img.className = 'cart'
		}
		e.target.nextElementSibling.innerHTML = count;
		this.update(count,id)
	}
	update(num,id){ 
		axios.post('/users/update',{productNum:num,id:id})
				.then((res)=>{
					console.log(res)
					console.log(res.data.message)
				})
				.catch((err)=>{
					console.log(err)
				})
	}
	componentDidMount(){
		console.log(this.refs);
	}
	render(){	
		return (
			<Router>
					<div className="hotpage">
						<Carousel></Carousel>
						<div className="promise">
							<div className="youxian">
								<img src="https://j-image.missfresh.cn/img_20170627185311186.png" alt=""/>
								<span>优鲜严选</span>
							</div>					
							<div className="jiance">
								<img src="https://j-image.missfresh.cn/img_20170627184654084.png" alt=""/>
								<span>优鲜严选</span>
							</div>
							<div className="peifu">
								<img src="https://j-image.missfresh.cn/img_20170718194948016.png" alt=""/>
								<span>优鲜严选</span>
							</div>
						</div>
						<div className="card">
							<div className="left">
								<img src="https://image.missfresh.cn/category_group_images/64DF43CA25E19BCDE67856033794CB45.PNG" alt=""/>
							</div>
							<div className="right">
								<div className="top">
									<img src="https://image.missfresh.cn/category_group_images/77BB71BAC0AA3A7CE4E24C9FCB64D5EE.PNG" alt=""/>
								</div>
								<div className="bottom">
									<div className="invite">
											<img src="https://image.missfresh.cn/category_group_images/A9595ECA0303F20F38FCAA120C4D4903.PNG" alt=""/>
									</div>
									<div className="qiandao">
											<img src="https://image.missfresh.cn/category_group_images/4BEFC941638A2324DEFF28F5253B58A0.PNG" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="hot">
							<img src="https://image.missfresh.cn/category_group_images/A69D7A2B1E594F44892BA50E12C23A0C.JPG" alt=""/>
						</div>
						{
							this.props.Fruitpro.map((item,index)=>{	
								return(
									item.map((item,index)=>{
										return(
											<div key={index} className="product" >
												<input id='hidden' ref='hidden' type="hidden" value={item._id} />
								 				<Link to={`/home/fruit/detail/${item._id}`}>
													<div className="pleft">
														<img ref='img' alt="" src={item.img}/>
													</div>
													<div className="pright">
														<p ref="pone" className="pone">{item.title}</p>
														<p ref="ptwo" className="ptwo">{item.detail}</p>
														<p className="pthree"><span ref="pthree">{item.redpacket}</span></p>
														<p className="pfour">商城价 ￥<span ref="pfour">{item.prime}</span></p>
														<p className="pfive">优享会员价 ￥<span ref="pfive">{item.sale}</span></p>
													</div>
												</Link>
												<img data={item._id} onClick={(e)=>this.addToCart(e,
													item._id, item.img, item.title, item.detail, item.redpacket, item.prime, item.sale
													)} alt="" className="cart" src="https://j-image.missfresh.cn/img_20170425134548759.png"/>							
												<div ref='num' className="num hidden">	
													<div onClick={(e)=>{this.reduce(e,item._id)}} className="reduce">-</div>
													<div ref='count' className="count"></div>
													<div onClick={(e)=>{this.add(e,item._id)}} className="add">+</div>
												</div>
											</div>
										)
						 			})
								)
							})				
						}
						<Switch>
							<Route path = {`${this.props.match.url}/:goodsId`} component={Detail} />
						</Switch>
					</div>
			</Router>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		Fruitpro:state.Fruitpro
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		addTodo:function(){
			axios.post('/save/find').then((res)=>{
					console.log(res)
					dispatch({
						type: 'FRUIT_LOAD',
						payload:res.data.docs	
					})
				})
				.catch((err)=>{
					console.log(err)
				})
		}
	}
}
const HotSale = connect(mapStateToProps,mapDispatchToProps)(HotSaleUI);
export default HotSale;
