import React,{Component} from 'react';
import './shopcart.css';

class Shopcart  extends Component {
	constructor(){
		super()
	}
	render(){
		return (
			<div className="shopcartPage">
				<div className="place">
					<i class="iconfont">&#xe611;</i>
					<span>北京</span>
					<i class="iconfont">&#xe632;</i>
				</div>
				<div className="postPrice">
					<div className="check">
						<span></span>
					</div>
					<div className="arrive">
						<p>次日达</p>
					</div>
					<div className="free">
						<p>免邮费</p>
					</div>
				</div>
				<div className="products">
					<div className="item">
						<div className="check">
							<span></span>
						</div>
						<div className="img">
							<img src="https://image.missfresh.cn/f787c7f96d5e4d87be8296d8adf72b49.jpg?iopcmd=thumbnail&type=4&width=200" alt=""/>
						</div>
						<div className="info">
							<p className="title">在家吃饭稻花香大米2.5KG</p>
							<p className="redpacket">红包不可用</p>
							<p className="vip">邮箱会员价￥28.9</p>
							<p className="price">商城价￥59.9</p>
						</div>
						<div className="num">
							<span id="reduce"></span>
							<span className="total">1</span>
							<span id="add"></span>
						</div>
					</div>
				</div>
				<div className="totalPrice">
					<p>商品总价<span>118.5</span></p>
				</div>
				<div className="summary">
					<span>合计</span>	
				</div>
				<div className="vipCard">
					<div className="title">
						<div className="img">
							<img src="https://j-image.missfresh.cn/img_20171028224101960.png" alt=""/>		
						</div>
						<div className="text">
							<pre>开通会员可得<span>红包</span></pre>
							<pre>本单更省<span>40</span>元+返<span>3.92元</span>
							</pre>
						</div>	
					</div>
					<div className="saleMonth">
						<div className="img">
							<img src="https://j-image.missfresh.cn/img_20171115104617893.png" alt=""/>
							<span></span>	
						</div>
						<div className="buy">
							<span></span>
						</div>	
					</div>
					<div className="saleMonth">
						<div className="img">
							<img src="https://j-image.missfresh.cn/img_20171115104729535.png" alt=""/>
							<span></span>	
						</div>
						<div className="buy">
							<span></span>
						</div>	
					</div>
					<div className="saleMonth">
						<div className="img">
							<img src="https://j-image.missfresh.cn/img_20171115104756101.png" alt=""/>
							<span></span>	
						</div>
						<div className="buy">
							<span></span>
						</div>	
					</div>
				</div>
			</div>	
			)
	}
}

export default Shopcart;