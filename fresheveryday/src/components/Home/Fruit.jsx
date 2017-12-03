import React,{Component} from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import './fruit.css';
import Carousely from './Carousel.jsx';

import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Detail from './Detail'
class FruitUI extends Component{
	constructor(){
		super()
		this.state={
			isshow:false
		}
		this.addToCart = this.addToCart.bind(this);
		this.update = this.update.bind(this);
		this.add = this.add.bind(this);
		this.reduce = this.reduce.bind(this);
	}
	appear(data){
		this.setState({
			isshow:data
		})
	}
	addToCart(e){
	}
	cartadd(){

	}
	componentDidMount(){
		if (this.props.Fruitpro.length===0) {
			this.props.addTodo()
		}
		// console.log(this)
	}
	addToCart(e,id,img,title,detail,redpacket,prime,sale){
		console.log(id, img, title, detail, redpacket, prime, sale)
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
	render(){
		var {match} = this.props;
		return(
		<Router>
			<div className="fruitpage">
				<Carousely></Carousely>
				<div className="today">
					<img alt="" src="https://image.missfresh.cn/category_group_images/A69D7A2B1E594F44892BA50E12C23A0C.JPG"/>
				</div>
				{
				 	this.props.Fruitpro.map((item,index)=>{	
				 	return(
						item.map((item,index)=>{
				 			return(
								<div key={index} className="product" >
									<input ref='hidden' type="hidden" value={item._id} />
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
									<img onClick={(e)=>this.addToCart(e,
													item._id, item.img, item.title, item.detail, item.redpacket, item.prime, item.sale
													)} alt="" className="cart" src="https://j-image.missfresh.cn/img_20170425134548759.png"/>							
									<div ref='num' className="num hidden">	
										<div onClick={(e)=>{this.reduce(e,item._id)}} className="reduce">-</div>
										<div ref='count' className="count">{this.state.number}</div>
										<div onClick={(e)=>{this.add(e,item._id)}} className="add">+</div>
									</div>
								</div>
			 				)
				 		})

			 		)
					})				
				}
				<Switch>
					<Route path={`${match.url}/detail/:item_id`} component={Detail} />	
				</Switch>
			</div>
		  </Router>
		)
	}
	
}
const mapStateToProps = (state)=>{
	return{
		Fruitpro:state.Fruitpro,
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		addTodo:function(){
			axios.post('/save/find')
			.then((res)=>{
				// console.log(res.data.docs)
					dispatch({
					type:"FRUIT_LOAD",
					payload:res.data.docs
				})
			})			
		},
		cartadd:function(id){
			axios.post('/save/findid',{id:id})
			.then((res)=>{
				console.log(res)
			})
		}
	}
}
const Fruit = connect(mapStateToProps,mapDispatchToProps)(FruitUI);
export default Fruit;