import './App.css';
import React, { Component } from 'react';
import {SearchBox} from './components/search-box/search-box.component.jsx';
import Cardlist from './components/card-list/card-list.component.jsx';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField : ""
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }
  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter
    (monster => monster.name.toLowerCase()
    .includes(searchField.toLowerCase()));
    
    
    return (
      <div className="App">
     
      <SearchBox 
      placeholder="Search Monsters"
      handleChange={e => this.setState({ searchField : e.target.value})}
      />
      <Cardlist monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;