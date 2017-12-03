import React,{Component} from 'react';
import HomeHead from './HomeHead.jsx';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import HotSale from './HotSale';
import Fruit from './Fruit';
import HotPot from './HotPot';
class Home extends Component{
	render(){
		var {match} = this.props;
		return (
			<Router>
				<div className="page">
				<HomeHead></HomeHead>							
				<Switch>
					<Redirect exact from="/home" to="/home/hotsale"/>
					<Route path={`${match.url}/hotsale`} component={HotSale} />
					<Route path={`${match.url}/hotPot`} component={HotPot} />
					<Route path={`${match.url}/fruit`} component={Fruit} />
					<Route path={`${match.url}/vegetables`} component={Fruit} />
					<Route path={`${match.url}/mike`} component={HotSale} />
					<Route path={`${match.url}/egg`} component={HotPot} />
					<Route path={`${match.url}/snacks`} component={HotSale} />
					<Route path={`${match.url}/drink`} component={HotPot} />
					<Route path={`${match.url}/oceanFood`} component={HotSale} />
					<Route path={`${match.url}/cookedFood`} component={HotSale} />
					<Route path={`${match.url}/fastFood`} component={HotPot} />
					<Route path={`${match.url}/oil`} component={HotSale} />
					<Route path={`${match.url}/easyFood`} component={HotPot} />
					<Route path={`${match.url}/oceanFood`} component={HotSale} />
				</Switch>	
				</div>
			</Router>	
		)
	}
}

export default Home;