import React, { Component } from 'react';
import axios from 'axios';
import './Search.css';
// import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SearchDetail from './SearchDetail';

class Search extends Component {
	constructor(){
		super()
		this.state = {
			recommendList:[],
			transitionName:'',
			list:null,
			searchword:'',
			flag:false,
		}
		this.search = this.search.bind(this);
		this.del = this.del.bind(this);
	}
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
	search(e){
		var value = e.target.innerHTML
		this.setState({
				searchword:value
		})
		axios.get(`/search/?device_id=7f638a9986a615e31b701693a4a6cc12&env=web&fromSource=zhuye&kw=${value}&platform=web&uuid=7f638a9986a615e31b701693a4a6cc12&version=4.0.0.1`)
			.then((res)=>{
				console.log(res)
				console.log(this.state.flag)
				this.setState({
					list: res.data.data[0].active_item,
					flag: true
				});
			})
			.catch((err)=>{
				console.log(err)
			})
	}
	del(){
		this.setState({
			flag:false,
			searchword:false
		})
	}
	render(){
		return (
					<ReactCSSTransitionGroup
		          transitionName='fade' 
		          transitionEnterTimeout={1000} 
		          transitionLeaveTimeout={1000}>					
						{
							this.props.isshow?
							<div className="searchPage">
								<div className="searchHead">
									<i onClick={()=>{this.props.change(false)}} className="iconfont">&#xe60f;</i>
									<div className="searchBox">
										<i className="iconfont iptbg">&#xe728;</i>
										<input type="text" placeholder={
											this.state.searchword?this.state.searchword
											:"请输入商品名称"
										} />
										{
											this.state.searchword?<span onClick={this.del} className="del">X</span>
											:null
										}
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
														<li ref='item' onClick={this.search} key={item}>{item}</li>
													)
											})
										}
									</ul>
								</div>
								<div className="searchHistory">	
								</div>
								{
									console.log(this.state.flag),
									this.state.flag?
									<SearchDetail list={this.state.list}></SearchDetail>
									:null
								}
							</div>
							:null
						}
						</ReactCSSTransitionGroup>
		)
	}
}

// const mapStateToProps = (state)=>{
// 	return {
// 		flag: state.searchFlag
// 	}
// }

// const mapDispatchToProps = (dispatch)=>{
// 	return{
// 		slideOut:()=>{
// 			dispatch({
// 				type:'changeFlag',
// 				payload:false
// 			})
// 		}
// 	}
// }


// const Search = connect(mapStateToProps,mapDispatchToProps)(SearchUI)
export default Search;