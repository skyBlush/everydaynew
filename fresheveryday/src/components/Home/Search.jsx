import React, { Component } from 'react';
import axios from 'axios';
import './search.css';
import {connect} from 'react-redux'

class SearchUI extends Component {
	constructor(){
		super()
		this.state = {
			recommendList:[],
			transitionName:''
		}
		// this.slideOut = this.slideOut.bind(this);
	}
/*	slideOut(){
		this.setState({
			flag: !this.props.flag
		})
		console.log(this.props.flag)
	}*/
	componentDidMount(){
		var that = this;
		axios.get('/v3/product/searchhotwords/?device_id=7f638a9986a615e31b701693a4a6cc12&env=web&platform=web&uuid=7f638a9986a615e31b701693a4a6cc12&version=4.0.0.1')
				.then((res)=>{
					console.log(res);
					that.setState({
						recommendList : res.data.data
					})
				})
				.catch((err)=>{
					console.log(err)
				})
	}
	render(){
		return (
					<div className="searchPage">					
						<div className="searchHead">
							<i onClick={this.props.slideOut} class="iconfont">&#xe60f;</i>
							<div className="searchBox">
								<i class="iconfont iptbg">&#xe728;</i>
								<input type="text" placeholder="请输入商品名称" />
							</div>		
							<span>搜索</span>
						</div>
						<div className="hotSearch">
							<p>热门搜索</p>
						</div>
						<div className="recommend">
							<ul className="recommendBox">
								{
									this.state.recommendList.map((item,index)=>{
										return (
												<li key={item}>{item}</li>
											)
									})
								}
							</ul>
						</div>
						<div className="searchHistory">	
						</div>	
					</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		flag: state.searchFlag
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		slideOut:()=>{
			dispatch({
				type:'changeFlag',
				payload:false
			})
		}
	}
}


const Search = connect(mapStateToProps,mapDispatchToProps)(SearchUI)

export default Search;