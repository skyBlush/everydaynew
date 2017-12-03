import 'antd/dist/antd.css';
import './carousel.css'
import { Carousel } from 'antd';
import React,{Component} from 'react';
export default class Carousely extends Component{
	constructor(){
		super()
		this.state={
			banner:[{url:'https://j-image.missfresh.cn/img_20171120210609147.jpg?iopcmd=thumbnail&type=4&width=640'},
			{url:'https://j-image.missfresh.cn/img_20171124201720910.jpg?iopcmd=thumbnail&type=4&width=640'},
			{url:'https://j-image.missfresh.cn/img_20171126001136464.jpg?iopcmd=thumbnail&type=4&width=640'},
			{url:'https://j-image.missfresh.cn/img_20171114001522110.jpg?iopcmd=thumbnail&type=4&width=640'}]
		}
	}
	render(){
		return(
			<Carousel autoplay dots={false}>
				{this.state.banner.map((item,index)=>{
					return(
						<div key={item.url}>
							<h3><img src={item.url} alt=""/></h3>
						</div>
					)
				})}
				
			</Carousel>
		)
	}
}
