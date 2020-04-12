import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchBox/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
   
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  //a funcao de arrow => permite que se tenha acesso ao THIS, sem precisar dar um BIND no construtor
  handleChange = (e) => {
      this.setState({ searchField: e.target.value }, () =>
        console.log(this.state)
      );
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="seach monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters}></CardList>

      </div>
    );
  }

}


export default App;
