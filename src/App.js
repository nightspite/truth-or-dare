import React, { Component } from 'react';
import './App.css';
import { HashRouter , Route} from 'react-router-dom';
import Home from './components/Home';
import TruthOrDare from './components/TruthOrDare';
import TruthCard from './components/TruthCard';
import DareCard from './components/DareCard';
import {Link} from 'react-router-dom';


class App extends Component {
  state = {
    players: [
      {name: 'Kacper', gender: 'M', id: 1},
      {name: 'Patrycja', gender: 'F', id: 2},
      {name: 'Marcel', gender: 'M', id: 3},
      {name: 'Wiktoria', gender: 'F', id: 4},
      {name: 'Cersia', gender: 'F', id: 5}
    ],
    questions: [
      {question: 'Have you ever experimented with the same sex as yours just for fun?', shot: 2, id: 1},
      {question: 'Have you ever cheated on your partner?', shot: 3, id: 2},
      {question: 'Have you ever paid somebody compliments just to get laid?', shot: 1, id: 3},
      {question: 'Have you ever stalked your ex boyfriend/girlfriend or ex friend on social media?', shot: 0, id: 4},
      {question: 'Have you ever regretted breaking up with someone?', shot: 1, id: 5},
      {question: 'Have you ever thought about cheating on your bf/gf but never actually done it?', shot: 3, id: 6},
      {question: 'Have you ever had a crush on someone (not your partner ofc) while in relationship?', shot: 1, id: 7},
      {question: 'Have you ever been in an open relationship?', shot: 2, id: 8},
      {question: 'Have you ever said „I love you” without feeling it?', shot: 1, id: 9},
      {question: 'Have you ever lied in this game?', shot: 1, id: 10},
      {question: 'What is the largest age gap you’ve had between you and someone you’ve had sex with?', shot: 1, id: 11},
      {question: 'What is the largest age gap you’ve had between you and someone you’ve kissed?', shot: 1, id: 12},
      {question: 'What was your worst sex experience?', shot: 2, id: 13},
      {question: 'What’s the least amount of time you’ve known someone before you’ve had sex with them?', shot: 2, id: 14},
      {question: 'What’s the least amount of time you’ve known someone before you’ve made out with them?', shot: 2, id: 15},
      {question: 'Who is the most inappropriate person you’ve had a sexual fantasy about?', shot: 4, id: 16},
      {question: 'Is sex better when you’re in love, or do you prefer one night stands/fwb?', shot: 3, id: 17},
      {question: 'How many sex partners do you believe is “too many”?', shot: 2, id: 18},
      {question: 'What’s #1 on your sexual bucket list right now?', shot: 2, id: 19},
      {question: 'If you had to choose between only oral sex or only penetrative sex for the rest of your life, which one would you pick?', shot: 2, id: 20}
    ],
    dares: [
      {dare: 'Kill yourself', shot: 2137, id: 1}
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
      <HashRouter >
        <div className="App">
          <Route exact path='/' render={(props) => (<Home {...props} players={this.state.players} deletePlayer={this.deletePlayer} addPlayer={this.addPlayer} />)} />
          <Route exact path='/truthordare' render={(props) => (<TruthOrDare {...props} players={this.state.players} />)} />
          <Route exact path='/truthcard' render={(props) => (<TruthCard {...props} questions={this.state.questions} randomPick={Math.floor(Math.random() * this.state.questions.length)} />)} />
          <Route exact path='/darecard' render={(props) => (<DareCard {...props} dares={this.state.dares} randomPick={Math.floor(Math.random() * this.state.dares.length)} />)} />

          <Link to="/" className="home-btn">
            <button><i className="material-icons">home</i></button>
          </Link>

        </div>
      </HashRouter>
    );
  }
}

export default App;

