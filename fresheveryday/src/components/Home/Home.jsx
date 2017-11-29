import React,{Component} from 'react'
import HomeHead from './HomeHead.jsx'
import Fruit from './Fruit.jsx'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Search from './Search';
import HotSale from './HotSale'

class Home extends Component{
	constructor(){
		super()
	}
	render(){
		return (
			<Router>
				<div className="page">
				<HomeHead></HomeHead>							
				<Fruit/>	
				</div>
			</Router>	
		)
	}
}

export default Home;