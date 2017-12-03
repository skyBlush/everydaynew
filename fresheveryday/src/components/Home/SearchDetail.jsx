import React, { Component } from 'react';
import './searchdetail.css';
import axios from 'axios';

class SearchDetail extends Component{
	constructor(){
		super()
	}
	render(){
		return (
			<div className="searchDetailPage">
				{
					console.log(this.props.list),
					this.props.list===null?
					<div>
						<p>没有商品，试试别的关键词？</p>
					</div>
					:
					this.props.list.map((item,index)=>{
						return (					
							<div className="product" key={item.big_stock}>
								<input type="hidden" ref='hidden' value={item.big_stock} />
								<div className="pleft">
									<img ref='img' src={item.image}/>
								</div>
								<div className="pright">
									<p ref='pone' className="pone">{item.name}</p>
									<p ref='ptwo' className="ptwo">{item.subtitle}</p>
									<p className="pthree"><span ref='pthree'>{item.product_tag_name}</span></p>
									<p className="pfour">商城价 ￥<span ref='pfour'>{(item.price)/100}</span></p>
									<p className="pfive">优享会员价 ￥<span ref='pfive' >{(item.vip_price)/100}</span></p>
									<img falg = {true} ref = 'car' className="car" src={item.cart_image} />
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default SearchDetail; 
