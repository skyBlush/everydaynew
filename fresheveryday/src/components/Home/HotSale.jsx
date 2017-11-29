import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Carousel from './Carousel'

class HotSaleUI extends Component{
	constructor(){
		super();
	}
	componentDidMount(){
		this.props.addBannerPic()
	}
	render(){	
		return (
			<div className="hotpage">
				<Carousel></Carousel>
				<div className="promise">					
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		bannerPic:state.addBannerPic
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		addBannerPic:function(){
			axios.get('/v2/product/home/index?device_id=7f638a9986a615e31b701693a4a6cc12&env=web&platform=web&uuid=7f638a9986a615e31b701693a4a6cc12&version=4.0.0.1').then((res)=>{
					console.log(res)
					dispatch({
						type: 'add-hotBannerPic',
						payload:res.banner	
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
