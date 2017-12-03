import React,{Component} from 'react'
import './freshnews.css'
import axios from 'axios'
class FreshNews extends Component {
	constructor(){
		super();
		this.state={
			article:[]
		}
	}
	componentDidMount(){
		axios.get('/web20/system/discover/?device_id=2eedd20f9d4d36d4a721e012e0c97060&env=web&platform=web&tdk=2eedd20f9d4d36d4a721e012e0c97060&uuid=2eedd20f9d4d36d4a721e012e0c97060&access_token=null&version=3.9.0.2')
		.then((res)=>{
			var data = res.data.discover_list[0].discover_con_list
			console.log(res.data.discover_list[0].discover_con_list)
			this.setState({
				article:data
			})	
		})
	}
	render(){
		return (
			<div className="newpage">
				<div className="blank"></div>
				{
					this.state.article.map((item,index)=>{
						return(
							<div className="article" key={index}>
								<div className="pic">
									<img alt="" src={item.img}/>
									<p className="frame">{item.content_tag}</p>
									<p className="like"><i className="iconfont">&#xe6a2;</i>{item.like}</p>
								</div>
								<div className="arctitle">
									{item.title}
								</div>
								<div className="arcdetail">
									{item.con}
								</div>
								<div className="other">
									<span className="time">{item.online_time}</span>
									<span className="stick">|</span>
									<span className="browse">{item.view}次浏览</span>
								</div>
							</div>
						)						
					})					
				}
			</div>	
			)
	}
}
// const mapStateToProps=(state)=>{
// 	return{

// 	}
// }
// const mapDispatchToProps=(dispatch)=>{
// 	return{
// 		getdata:()=>{
// 			dispatch({
// 				type:"",
// 				payload:
// 			})
// 		}	
// 	}
// }
export default FreshNews;