import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

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
	const filteredRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
  if (this.state.robots.length === 0) {
    return <h1 className='tc'>Loading</h1>
  } else {

		return (
		  <div className='tc'>
			<h1 className='f1'>robofriends</h1>
			<SearchBox onSearchChange={this.onSearchChange}/>
			<CardList robots={filteredRobots}/>
		  </div>
		);
	  }
  }
}

export default App