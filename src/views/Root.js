import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from 'views/Home';
import TruthOrDare from 'views/TruthOrDare';
import TruthCard from 'views/TruthCard';
import DareCard from 'views/DareCard';
import MainTemplate from 'templates/MainTemplate';

class Root extends Component {
  state = {
    players: [{ name: 'Default', id: 1 }],
  };

  addPlayer = player => {
    const { players } = this.state;

    // eslint-disable-next-line no-param-reassign
    player.id = players.length + 1;
    const playersList = [...players, player];

    this.setState({
      players: playersList,
    });
  };

  deletePlayer = id => {
    const { players } = this.state;

    const playersList = players.filter(player => {
      return player.id !== id;
    });

    this.setState({
      players: playersList,
    });
  };

  render() {
    const { players } = this.state;

    return (
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  players={players}
                  deletePlayer={this.deletePlayer}
                  addPlayer={this.addPlayer}
                />
              )}
            />
            <Route
              exact
              path="/truthordare"
              render={props => <TruthOrDare {...props} players={players} />}
            />
            <Route exact path="/truthcard" component={TruthCard} />
            <Route exact path="/darecard" component={DareCard} />
            <Link to="/" className="home-btn">
              <button type="button">
                <i className="material-icons">home</i>
              </button>
            </Link>
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    );
  }
}

export default Root;
