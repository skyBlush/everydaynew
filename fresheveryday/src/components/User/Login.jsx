import React,{Component} from 'react'
import axios from 'axios';
import './login.css'
import Regist from './Regist'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Login extends Component{
	constructor(){
		super();
		this.state={
			isappear:false
		}
		console.log(this)
		this.login = this.login.bind(this);
		this.show = this.show.bind(this);
	}
	show(data){
		this.setState({
			isappear:data
		})
	}
	login(){
		axios.post('/users/login',{
				username:document.querySelector('#loginId').value,
				psw:document.querySelector('#psw').value
			})
			.then((res)=>{
				console.log(res)
				if( res.data.code === 1 ){
					alert(res.data.message)
					this.props.change(false);
					console.log(res);
					localStorage.setItem("username",res.data.username)
					// this.props.send(res.data.username)
					// this.props.history.push('/users');//页面跳转
				}else{
					alert(res.data.message);
				}
			})
			.catch((err)=>{
				console.log(err)
			})
	}
	render(){
		return (
			<ReactCSSTransitionGroup
		          transitionName='fade' 
		          transitionEnterTimeout={1000} 
		          transitionLeaveTimeout={1000}>
				{
					this.props.isshow&&!localStorage.getItem('username')?
					<div className="loginBox">
						<div className="loginPage">
							<h1><i className="iconfont" onClick={()=>{this.props.change(false)}}>&#xe60f;</i>验证手机</h1>
							<div className="conetent">
								<input ref="loginId" id="loginId" type="text" placeholder="请输入用户名/密码"/><br/>
								<input ref="psw" id="psw" type="text" placeholder="输入密码"/>
								<button onClick={this.login} id="login">登录</button>
								<button onClick={()=>{this.show(true)}} id="login">注册</button>
								<p>为方便您及时查询订单信息，需要验证您的手机号来登录</p>
							</div>
						</div>
						<Regist isappear={this.state.isappear} change={this.show}></Regist> 
					</div>
					:null
				}		
			</ReactCSSTransitionGroup>
			)
	}
}

export default Login;