import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'views/Home';
import TruthOrDare from 'views/TruthOrDare';
import Truth from 'views/Truth';
import Dare from 'views/Dare';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';

class Root extends Component {
  state = {
    players: [{ name: 'Player', id: 1 }],
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
              path={routes.home}
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
              path={routes.truthordare}
              render={props => <TruthOrDare {...props} players={players} />}
            />
            <Route path={routes.truth} component={Truth} />
            <Route path={routes.dare} component={Dare} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    );
  }
}

export default Root;
