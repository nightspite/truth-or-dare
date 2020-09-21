import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Home from 'views/Home';
import TruthOrDare from 'views/TruthOrDare';
import TruthCard from 'views/TruthCard';
import DareCard from 'views/DareCard';
import MainTemplate from 'templates/MainTemplate';

class Root extends Component {
  state = {
    players: [{ name: 'Default', gender: 'M', id: 1 }],
  };

  addPlayer = (player) => {
    const { players } = this.state;
    // player.id = this.state.players.length + 1;
    player.id = players.length + 1;
    const playersList = [...players, player];

    this.setState({
      playersList,
    });
  };

  deletePlayer = (id) => {
    const players = this.state.players.filter((player) => {
      return player.id !== id;
    });

    this.setState({
      players,
    });
  };

  render() {
    return (
      <HashRouter>
        <MainTemplate className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  players={this.state.players}
                  deletePlayer={this.deletePlayer}
                  addPlayer={this.addPlayer}
                />
              )}
            />
            <Route
              exact
              path="/truthordare"
              render={(props) => (
                <TruthOrDare {...props} players={this.state.players} />
              )}
            />
            <Route
              exact
              path="/truthcard"
              render={(props) => (
                <TruthCard
                  {...props}
                  questions={this.state.questions}
                  randomPick={Math.floor(
                    Math.random() * this.state.questions.length,
                  )}
                />
              )}
            />
            <Route
              exact
              path="/darecard"
              render={(props) => (
                <DareCard
                  {...props}
                  dares={this.state.dares}
                  randomPick={Math.floor(
                    Math.random() * this.state.dares.length,
                  )}
                />
              )}
            />
          </Switch>

          <Link to="/" className="home-btn">
            <button type="button">
              <i className="material-icons">home</i>
            </button>
          </Link>
        </MainTemplate>
      </HashRouter>
    );
  }
}

export default Root;
