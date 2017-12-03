import React,{Component} from 'react';
import './user.css'
import Login from './Login';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class User extends Component {
	constructor(){
		super();
		this.state = {
			isshow : false,
			username : ''
		}
		this.appear = this.appear.bind(this);
		this.getUser = this.getUser.bind(this);
		this.loginOut = this.loginOut.bind(this);
		console.log(this)
	}
	appear(data){
		this.setState({
			isshow : data	
		})
	}
	componentDidMount(){
		this.getUser();
	}
	getUser(){
		var user = localStorage.getItem('username');
		this.setState({
			username : user
		});
	}
	loginOut(){
		localStorage.removeItem('username');
		this.setState({
			username : null
		})
	}
	render(){
		return (
			<div className="userpage">	
				<div className="headd">
					<span ref="user" onClick = {()=>this.appear(true)} className="ulog">{
						this.state.username ? this.state.username : '用户登录'
					}</span>
					{
						this.state.username ?
						<span className="ulogOut" onClick={this.loginOut}>注销</span>
						: null

					}
				</div>
				<ul>
					<li>
						<span>元</span>
						<p>余额</p>
					</li>
					<li>
						<span>张</span>
						<p>红包</p>
					</li>
					<li>
						<span>张</span>
						<p>商品券</p>
					</li>
					<li>
						<span>分</span>
						<p>积分兑换></p>
					</li>
				</ul>
				<div className="vip">
					<div className="vipone">
						<p>会员权益</p><span>开通会员 ></span>
					</div>
					<p className="tobe">
					成为优享会员，预计1年将为你<span>节省1121.30元</span>
					</p>
				</div>
				<div className="scrolly">
					<div className="d"><img alt="" src="https://j-image.missfresh.cn/img_20171103161358679.png"/><span>会员专享价</span></div>
					<div className="d"><img alt="" src="https://j-image.missfresh.cn/img_20171028202643589.png"/><span>购物返现</span></div>
					<div className="d"><img alt="" src="https://j-image.missfresh.cn/img_20171028202735028.png"/><span>1小时送达</span></div>
					<div className="d"><img alt="" src="https://j-image.missfresh.cn/img_20171028202830564.png"/><span>会员商品</span></div>
					<div className="d"><img alt="" src="https://j-image.missfresh.cn/img_20171028202909231.png"/><span>专享客服</span></div>
				</div>	
				<div className="invite">
					<img alt="" src="https://j-image.missfresh.cn/img_20171107230641093.png"/>
				</div>
				<div className="menu">
					<div>我的订单<span>></span></div>
					<div>我的地址<span>></span></div>
					<div>下载每日优鲜APP<span>></span></div>
					<div>联系客服<span>></span></div>
					<div>意见反馈<span>></span></div>
					<div>消息<span>></span></div>
					<div>关于我们<span>></span></div>
					<div className="settings">设置<span>></span></div>
				</div>
				<ReactCSSTransitionGroup
		          transitionName='fade' 
		          transitionEnterTimeout={1000} 
		          transitionLeaveTimeout={1000}>
		          	<Login isshow = {this.state.isshow} change={this.appear}></Login>
				</ReactCSSTransitionGroup>
			</div>	
			)
	}
}

// const mapStateToProps = (state)=>{
// 	return {
// 		username : state.username
// 	}
// }
// const mapDispatchToProps = (dispatch)=>{
// 	return {
// 		changeFlag:()=>{
// 			dispatch({
// 				type:'changeUserFlag',
// 				payload: true
// 			})
// 		}
// 	}
// }

// const User = connect(mapStateToProps,null)(UserUI)
export default User;