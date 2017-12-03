import React,{Component} from 'react';
import '../index.css'
import '../style/footerstyle.css'
import {NavLink} from 'react-router-dom';
// import {connect} from 'react-redux';
import Login from './User/Login';

class Footer extends Component {
	constructor(){
		super()
		this.state={
			isshow:false
		}
		this.appear = this.appear.bind(this)
	}
	appear(data){
		
		this.setState({
			isshow:data
		})
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
						<NavLink onClick={()=>{this.appear(true)}} activeClassName='active' to='/user'>
							<i className="iconfont">&#xe633;</i>
							<span>我的</span>
						</NavLink>	
					</div>
				</footer>
				<Login isshow={this.state.isshow} change={this.appear}></Login>
			</div>
				
			)
	}
}

// const mapStateToProps = (state)=>{
// 	return{
// 		flag : state.loginFlag 
// 	}
// }

// const mapDispatchToProps = (dispatch)=>{
// 	return{
// 		changeFlag:()=>{
// 			dispatch({
// 				type: 'changeUserFlag',
// 				payload: true
// 			})
// 		}
// 	}
// }
// const Footer = connect(mapStateToProps,mapDispatchToProps)(FooterUI)

export default Footer;