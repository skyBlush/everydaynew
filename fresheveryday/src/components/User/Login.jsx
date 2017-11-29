import React,{Component} from 'react'
import axios from 'axios';
import './login.css'
import {connect} from 'react-redux';
import Regist from './Regist'

class LoginUI extends Component{
	constructor(){
		super();
		this.login = this.login.bind(this);
	}
	login(){
		axios.post('/users/login',{
			username:this.refs.loginId.value,
			psw:this.refs.psw.value
		})
			.then((res)=>{
				console.log(res)
				if( res.data.code === 1 ){
					alert(res.data.message)
					this.props.changeFlag();
					// this.props.history.push('/users');
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
				<div>
					<div className="loginPage">
						<h1><i class="iconfont" onClick={this.props.changeFlag}>&#xe60f;</i>验证手机</h1>
						<div className="conetent">
							<input ref="loginId" id="loginId" type="text" placeholder="请输入用户名/密码"/><br/>
							<input ref="psw" id="psw" type="text" placeholder="输入密码"/>
							<button onClick={this.login} id="login">登录</button>
							<button onClick={this.props.showRegistPage} id="login">注册</button>
							<p>为方便您及时查询订单信息，需要验证您的手机号来登录</p>
						</div>
					</div>
					{
						this.props.registFlag? <Regist></Regist> : ''
					}
				</div>
			)
	}
}

const mapStateToProps = (state)=>{
	return {
		flag: state.loginFlag,
		registFlag: state.registFlag
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		changeFlag: function(){
			dispatch({
				type:'changeUserFlag',
				payload: false
			})
		},
		showRegistPage: function(){
			console.log(1)
			dispatch({
				type:'changeRegistFlag',
				payload: true
			})
		}
	}
}
const Login = connect(mapStateToProps,mapDispatchToProps)(LoginUI)
export default Login;