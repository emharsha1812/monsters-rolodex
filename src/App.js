import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/searchbox-style/search-box.styles.css";

import { CardList } from "./components/card-list/card-list.component";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo"></img>
//           <p>Hello my name is Harshwardhan</p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           ></a>
//         </header>
//       </div>
//     );
//   }
// }
//we can also write class App extends React.Component
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  //when this component mounts(meanings puts it on page) it calls whatever block of code we write inside each time
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      //fetch returns a promise
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));

    // handleChange = (e) => {
    //   this.setState({ searchField: e.target.value });
    // };
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search meows"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
