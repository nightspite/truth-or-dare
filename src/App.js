import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  state = {
    players: [
      {name: 'Kacper', gender: 'M', id: 1},
      {name: 'Patrycja', gender: 'F', id: 2},
      {name: 'Marcel', gender: 'M', id: 3},
      {name: 'Wiktoria', gender: 'F', id: 4}
    ]
  }

  deletePlayer = (id) => {

    const players = this.state.players.filter(player => {
      return player.id !== id
    })

    this.setState({
      players
    })
  }

  render(){
    return (
     <div>
       <Home players={this.state.players} deletePlayer={this.deletePlayer}/>
     </div>
    );
  }
}

export default App;
