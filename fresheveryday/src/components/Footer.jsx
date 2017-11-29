import React,{Component} from 'react';
import {Navlink} from 'react-router-dom';
import '../index.css'
import '../style/footerstyle.css'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './User/Login';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class FooterUI extends Component {
	constructor(){
		super()
	}
	render(){
		return (
			<div>
				<footer>
					<div className='footerNav'>
					<NavLink activeClassName='active' to='/home'>
							<i className="iconfont">&#xe60b;</i>
							<span>首页</span>
					</NavLink>
					<NavLink activeClassName='active' to='/freshNews'>
							<i className="iconfont">&#xe656;</i>
							<span>新鲜事</span>
					</NavLink>	
						<NavLink activeClassName='active' to='/shopcart'>
							<i className="iconfont">&#xe504;</i>
							<span>购物车</span>
					</NavLink>	
						<NavLink onClick={this.props.changeFlag} activeClassName='active' to='/user'>
							<i className="iconfont">&#xe633;</i>
							<span>我的</span>
					</NavLink>	
					</div>
				</footer>
				<ReactCSSTransitionGroup
		          transitionName='fade' 
		          transitionEnterTimeout={1000} 
		          transitionLeaveTimeout={1000}>
					{
						this.props.flag? <Login></Login> : ''
					}
		        </ReactCSSTransitionGroup>
			</div>
				
			)
	}
}

const mapStateToProps = (state)=>{
	return{
		flag : state.loginFlag 
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		changeFlag:()=>{
			dispatch({
				type: 'changeUserFlag',
				payload: true
			})
		}
	}
}
const Footer = connect(mapStateToProps,mapDispatchToProps)(FooterUI)

export default Footer;