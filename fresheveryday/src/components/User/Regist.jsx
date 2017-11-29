import React,{ Component } from 'react';
import './regist.css';
import axios from 'axios';
import {connect} from 'react-redux';

class RegistUI extends Component{
	constructor(){
		super()
		this.regist = this.regist.bind(this)
	}
	regist(){
		axios.post('/users/register',{
			username:this.refs.username.value,
			tel:this.refs.tel.value,
			psw:this.refs.tel.value
		})
			.then((res)=>{
				console.log(res)
				if(res.data.code===1){
					// this.props.history.push('/login');
					alert(res.data.message);
					this.props.hideRegistPage();
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
				<div className="registPage">
					<h1><i onClick={this.props.hideRegistPage} class="iconfont">&#xe60f;</i>验证手机</h1>
					<div className="conetent">
						<input ref="username" id="username" type="text" placeholder="请输入用户名"/>
						<input ref="tel" id="tel" type="text" placeholder="请输入手机号"/>
						<input ref="psw" id="psw" type="text" placeholder="输入密码"/>
						<button onClick={this.regist} id="regist">注册</button>
						<p>为方便您及时查询订单信息，需要验证您的手机号来登录</p>
					</div>
				</div>
			)
	}
}

const mapStateToProps = (state)=>{
	return{
		registFlag: state.registFlag
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		hideRegistPage: ()=>{
			dispatch({
				type:'changeRegistFlag',
				payload:false
			})
		}
	}
}

const Regist = connect(mapStateToProps,mapDispatchToProps)(RegistUI)
export default Regist;