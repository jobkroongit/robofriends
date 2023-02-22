import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}

	}

// Mount component update the state
componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
     //  file deepcode ignore PromiseNotCaughtGeneral: <please specify a reason of ignoring this>
      .then(response => response.json())
      .then(users => this.setState({ robots: robots }));
}

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value })
}

render() {	
	const { robots, searchfield } = this.state;
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
  	return !robots.length ? 
	 	<h1 className='tc'>Loading</h1> :
	 	(
		  <div className='tc'>
			<h1 className='f1'>robofriends</h1>
				<SearchBox onSearchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
		  </div>
		);
	}
}


export default App