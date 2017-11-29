import React,{Component} from 'react';
import './homehead.css'
import {NavLink} from 'react-router-dom';
import Search from './Search';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux'
// import {HotSale,HotPot,Fruit,Vegetables,Mike,Egg,Snacks,Drink,OceanFood,CookedFood,
				// FastFood,Oil,EasyFood,Daily} from './'

class HomeHeadUI extends Component {
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<header id="head">
					<div className="search">
						<div className="chosePlace">
							<img src="https://j-image.missfresh.cn/img_20161026155951214.png" alt=""/>
							<span>北京市</span>
							<i class="iconfont">&#xe632;</i>
						</div>
						<div className="searchButton">
							<i class="iconfont">&#xe728;</i>
							<span onClick = {this.props.slideIn}>搜索</span>
						</div>
					</div>
					<div className="nav">
						<div className="navList">
							<NavLink activeClassName="active" to="/Home/HotSale">
								<span>热卖</span>
							</NavLink>
							<NavLink activeClassName="active" to="/Home/HotPot">
								<span>火锅</span>
							</NavLink>
							<NavLink activeClassName="active" to="/Home/Fruit">
								<span>水果</span>
							</NavLink>
							<NavLink activeClassName="active" to="/Home/Vegetables">
								<span>蔬菜</span>
							</NavLink>
							<NavLink activeClassName="active" to="Home/Mike">
								<span>乳品</span>
							</NavLink>
							<NavLink activeClassName="active" to="Home/Egg">
								<span>肉蛋</span>
							</NavLink>
							<NavLink activeClassName="active" to="/Home/Snacks">
								<span>零食</span>
							</NavLink>
							<NavLink activeClassName="active" to="/Home/Drink">
								<span>酒饮</span>
							</NavLink>
							<NavLink activeClassName="active" to="/Home/OceanFood">
								<span>水产</span>
							</NavLink>
							<NavLink activeClassName="active" to="/Home/CookedFood">
								<span>熟食</span>
							</NavLink>
							<NavLink activeClassName="active" to="/Home/FastFood">
								<span>速食</span>
							</NavLink>
							<NavLink activeClassName="active" to="/Home/Oil">
								<span>粮油</span>
							</NavLink>
							<NavLink activeClassName="active" to="/Home/EasyFood">
								<span>轻食</span>
							</NavLink>
							<NavLink activeClassName="active" to="/Home/Daily">
								<span>日百</span>
							</NavLink>
						</div>
						<div className="navButton">
							<i class="iconfont">&#xe507;</i>
						</div>						
					</div>
				</header>
				<ReactCSSTransitionGroup
		          transitionName='fade' 
		          transitionEnterTimeout={1000} 
		          transitionLeaveTimeout={1000}>
					{
						this.props.flag ?<Search></Search>: ''
					}
				</ReactCSSTransitionGroup>
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
		slideIn: ()=>{
			dispatch({
				type : 'changeFlag',
				payload : true
			})
		}
				
	}
}

const HomeHead = connect(mapStateToProps,mapDispatchToProps)(HomeHeadUI)
export default HomeHead;