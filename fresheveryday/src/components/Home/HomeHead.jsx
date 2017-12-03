import React,{Component} from 'react';
import './homehead.css'
import {NavLink} from 'react-router-dom';
import Search from './Search';

class HomeHead extends Component {
	constructor(){
		super();
		this.state={
			isshow:false
		}
		this.slide = this.slide.bind(this)
	}
	slide(data){
		this.setState({
			isshow: data
		})
	}
	render(){
		return (
			<div>
				<header id="head">
					<div className="search">
						<div className="chosePlace">
							<img src="https://j-image.missfresh.cn/img_20161026155951214.png" alt=""/>
							<span>北京市</span>
							<i className="iconfont">&#xe632;</i>
						</div>
						<div className="searchButton">
							<i className="iconfont">&#xe728;</i>
							<span onClick = {()=>{this.slide(true)}}>搜索</span>
						</div>
					</div>
					<div className="nav">
						<div className="navList">
							<NavLink activeClassName="active" to={'/home/hotsale'}>
								<span>热卖</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/hotpot'}>
								<span>火锅</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/fruit'}>
								<span >水果</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/vegetables'}>
								<span>蔬菜</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/milk'}>
								<span>乳品</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/egg'}>
								<span>肉蛋</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/snacks'}>
								<span>零食</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/drink'}>
								<span>酒饮</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/oceanfood'}>
								<span>水产</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/cookedfood'}>
								<span>熟食</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/fastfood'}>
								<span>速食</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/oil'}>
								<span>粮油</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/easyfood'}>
								<span>轻食</span>
							</NavLink>
							<NavLink activeClassName="active" to={'/home/daily'}>
								<span>日百</span>
							</NavLink>
						</div>
						<div className="navButton">
							<i className="iconfont">&#xe507;</i>
						</div>						
					</div>
				</header>		
				<Search isshow={this.state.isshow} change={this.slide}></Search>		
			</div>
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
// 		slideIn: ()=>{
// 			dispatch({
// 				type : 'changeFlag',
// 				payload : true
// 			})
// 		}
				
// 	}
// }

// const HomeHead = connect(mapStateToProps,mapDispatchToProps)(HomeHeadUI)
export default HomeHead;