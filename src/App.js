import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Players from './components/Players';
import TruthOrDare from './components/TruthOrDare';
import TruthCard from './components/TruthCard';


class App extends Component {
  state = {
    players: [
      {name: 'Kacper', gender: 'M', id: 1},
      {name: 'Patrycja', gender: 'F', id: 2},
      {name: 'Marcel', gender: 'M', id: 3},
      {name: 'Czaro', gender: 'M', id: 4}
    ]
  }

  addPlayer = (player) => {
    player.id = this.state.players.length + 1;
    let players = [...this.state.players, player];

    this.setState({
      players
    })
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
     <div className="App">
       {/* <Home players={this.state.players} deletePlayer={this.deletePlayer} addPlayer={this.addPlayer}/> */}

       {/* <Players players={this.state.players} /> */}

        <TruthOrDare players={this.state.players}/>
        {/* <TruthCard /> */}
     </div>
    );
  }
}

export default App;
