import React,{Component} from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import './fruit.css';
import Carousely from './Carousel.jsx';
class FruitUI extends Component{
	constructor(){
		super();
		// this.props.addTodo = this.props.addTodo.bind(this);
	}
	componentDidMount(){
		this.props.addTodo();
	}
	render(){
		return(
			<div>
				<Carousely></Carousely>
				<div className="today">
					<img src="https://image.missfresh.cn/category_group_images/A69D7A2B1E594F44892BA50E12C23A0C.JPG"/>
				</div>
				{this.props.Fruitpro.map((item,index)=>{
					<div className="product" key={item}>
						<div className="pleft">
							<img src="https://image.missfresh.cn/2fe733a49ea04cc19192b6a284fc98ab.jpg?iopcmd=thumbnail&type=4&width=200"/>
						</div>
						<div className="pright">
							<p className="pone">{item.status}</p>
							<p className="ptwo">可用商品券兑换</p>
							<p className="pthree"><span>红包不可用</span></p>
							<p className="pfour">商城价 ￥<span>59.9</span></p>
							<p className="pfive">优享会员价 ￥<span>49.9</span></p>
							<img className="car" src="https://j-image.missfresh.cn/img_20170425134548759.png"/>
						</div>
					</div>
				})				
				}
			</div>
		)
	}
	
}
const mapStateToProps = (state)=>{
	return{
		Fruitpro:state.Fruitpro
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		addTodo:function(){
			axios.get(`/v3/product/category/hd-fruit?device_id=2eedd20f9d4d36d4a721e012e0c97060&env=web&platform=web&uuid=2eedd20f9d4d36d4a721e012e0c97060&version=4.0.0.1`)
			.then((res)=>{
				console.log(res)
					dispatch({
					type:"FRUIT_LOAD",
					payload:res
				})
			})			
		}
	}
}
const Fruit = connect(mapStateToProps,mapDispatchToProps)(FruitUI);
export default Fruit;