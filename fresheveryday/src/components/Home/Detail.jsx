import React from 'react';
import './detail.css';
import { connect } from "react-redux";
import axios from 'axios';
import {Link} from 'react-router-dom';
class Detail extends React.Component{
	constructor(){
		super();
		this.state={
			data:[]
		}
	}
	componentDidMount(){
		var id = this.props.match.params.item_id
		axios.post('/save/findid',{id:id})
		.then((res)=>{
			console.log(res.data.docs[0])
			this.setState({
				data:res.data.docs[0]
			})
		})
	}
	render(){
		return (
						<div className="detailPage">
							<div className="dhead">
								<Link to="/home/fruit">
									<i className="iconfont">&#xe60f;</i>
								</Link>
								<span>商品详情</span>
								<span>安心保障</span>
							</div>
							<div className="dimg">
								<img src={this.state.data.img} alt=""/>
							</div>
							<div className="ddetail">
								<p className="dtitle">
									“{this.state.data.detail}”
								</p>
								<p className="dintro">
									{this.state.data.title}
								</p>
								<p className="dprime">
									商城价<span>￥{this.state.data.prime}</span>
								</p>
								<p className="dsale">
									优享会员价<span>￥{this.state.data.sale}</span>
								</p>
								<p className="hadsale">
									已售3291份
								</p>
								<p className="place">
									
								</p>
							</div>
							<div className="dfooter">	
								<span>
									<i className="iconfont">&#xe504;</i>
								</span>
								<span className="add">
									加入购物车
								</span>
							</div>						
						</div>
			)      
	}
} 

export default Detail
