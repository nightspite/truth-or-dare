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
      {name: 'Default', gender: 'M', id: 1}
    ],
    questions: [
      {question: 'Have you ever experimented with the same sex as yours just for fun?', shot: 1, id: 1},
      {question: 'Have you ever cheated on your partner?', shot: 2, id: 2},
      {question: 'Have you ever paid somebody compliments just to get laid?', shot: 1, id: 3},
      {question: 'Have you ever stalked your ex boyfriend/girlfriend or ex friend on social media?', shot: 0, id: 4},
      {question: 'Have you ever regretted breaking up with someone?', shot: 1, id: 5},
      {question: 'Have you ever thought about cheating on your bf/gf but never actually done it?', shot: 2, id: 6},
      {question: 'Have you ever had a crush on someone (not your partner ofc) while in relationship?', shot: 1, id: 7},
      {question: 'Have you ever been in an open relationship?', shot: 1, id: 8},
      {question: 'Have you ever said „I love you” without feeling it?', shot: 1, id: 9},
      {question: 'Have you ever lied in this game?', shot: 1, id: 10},
      {question: 'What is the largest age gap you’ve had between you and someone you’ve had sex with?', shot: 1, id: 11},
      {question: 'What is the largest age gap you’ve had between you and someone you’ve kissed?', shot: 1, id: 12},
      {question: 'What was your worst sex experience?', shot: 2, id: 13},
      {question: 'What’s the least amount of time you’ve known someone before you’ve had sex with them?', shot: 2, id: 14},
      {question: 'What’s the least amount of time you’ve known someone before you’ve made out with them?', shot: 2, id: 15},
      {question: 'Who is the most inappropriate person you’ve had a sexual fantasy about?', shot: 3, id: 16},
      {question: 'Is sex better when you’re in love, or do you prefer one night stands/fwb?', shot: 2, id: 17},
      {question: 'How many sex partners do you believe is “too many”?', shot: 1, id: 18},
      {question: 'What’s #1 on your sexual bucket list right now?', shot: 2, id: 19},
      {question: 'If you had to choose between only oral sex or only penetrative sex for the rest of your life, which one would you pick?', shot: 1, id: 20},
      {question: 'Which triangle would you prefer - two men and one woman or two women and one man?', shot: 2, id: 21},
      {question: 'Have you ever had a triangle?', shot: 2, id: 22},
      {question: 'Have you ever taken someone’s virginity?', shot: 1, id: 23},
      {question: 'What was your craziest sexual experience?', shot: 2, id: 24},
      {question: 'Would you rather dominate someone or be dominated?', shot: 2, id: 25},
      {question: 'What toys have you already used in your bed and which ones would you like to try out in the future?', shot: 2, id: 26},
      {question: 'Do you like to be spit on during sex?', shot: 2, id: 27},

      {question: 'Would you like to take part in a role play?', shot: 1, id: 28},
      {question: 'What’s something most people don’t like in bed, but you can’t get enough of?', shot: 2, id: 29},
      {question: 'Would you go to bed with someone you just met?', shot: 2, id: 30},
      {question: 'Of all the people here - which one would you like to fuck, which one would you like to marry and which one would you like to kill?', shot: 2, id: 31},
      {question: 'Of all the people here - who’s the hottest?', shot: 2, id: 32},
      {question: 'If you had to have sex with one person in this room - who would it be?', shot: 2, id: 33},
      {question: 'Of all the people here - who do you think gives the best blowjobs?', shot: 2, id: 34},
      {question: 'What’s the sexiest thing anyone’s ever said to you?', shot: 2, id: 35},
      {question: 'What’s the least sexy thing anyone’s ever said to you (while trying to be sexy)?', shot: 2, id: 36},
      {question: 'If you had the power to give or receive unlimited orgasms, what would you pick?', shot: 2, id: 37},
      {question: 'What kind of porn did you last watch?', shot: 1, id: 38},
      {question: 'What is the weirdest place you’ve had sex in?', shot: 1, id: 39},
      {question: 'How old do you think is “too old” for someone to still be a virgin?', shot: 1, id: 40},
      {question: 'If you could have one sexual superpower, what would it be?', shot: 2, id: 41},
      {question: 'What is the weirdest fetish you tried out?', shot: 2, id: 42},
      {question: 'Have you ever tried anal sex?', shot: 2, id: 43},
      {question: 'If you had to choose between having sex with one person for the rest of your life or never being able to have sex with the same person more than once, what would you pick?', shot: 2, id: 44},
      {question: 'Have you ever been proposed a one night stand and refused?', shot: 1, id: 45},
      {question: 'What’s a common fetish that you would never try in real life?', shot: 2, id: 46},
      {question: 'Has anyone ever caught you having sex?', shot: 1, id: 47},
      {question: 'What’s the biggest lie you’ve told in order to get someone into bed?', shot: 1, id: 48},
      {question: 'Have you ever had sex with more than one person at a time?', shot: 2, id: 49},
      {question: 'What one sexual experience would you want to erase from your memory?', shot: 2, id: 50},
      {question: 'What one sexual experience do you think about most often?', shot: 2, id: 51},
      {question: 'Have you ever called someone (or been called) "Daddy"?', shot: 1, id: 52},
      {question: 'What’s the least amount of time that’s passed between you having sex with two different people?', shot: 1, id: 53},
      {question: 'What is your favorite part of foreplay?', shot: 2, id: 54},
      {question: 'If you could double the amount in your bank account or double the amount of inches you have down there (for men)/double your breast size (for women), which one would you pick?', shot: 1, id: 55},
      {question: 'Would you rather sleep with only insanely hot people or sleep with only people who think you’re insanely hot?', shot: 1, id: 56},
      {question: 'What’s the most public place you’d fuck someone?', shot: 2, id: 57},
      {question: 'Do you have any sex tapes?', shot: 1, id: 58},
      {question: 'If you got to have a threesome with people in this room, who would you do it with and why?', shot: 3, id: 59},
      {question: 'Have you ever sexted anyone?', shot: 1, id: 60},
      {question: 'It’s totally not legal to do this but if it were . . . . [fill in the blank].', shot: 1, id: 61},
      {question: 'Where are you on the straight / queer spectrum?', shot: 1, id: 62},
      {question: 'Have you ever thought about someone else while having sex with your partner?', shot: 2, id: 63},
      {question: 'When was your first kiss?', shot: 1, id: 64},
      {question: 'How old were you when you lost your virginity?', shot: 1, id: 65},
      {question: 'What’s your favorite body part on yourself?', shot: 1, id: 66},
      {question: 'How many people have you slept with?', shot: 2, id: 67},
      {question: 'What would be more thrilling: angry sex or make-up sex?', shot: 1, id: 68},
      {question: 'Have you ever been attracted to the same sex?', shot: 1, id: 69},
      {question: 'Do you have any spicy pictures or videos saved on your phone?', shot: 1, id: 70},
      {question: 'Do you want to try anal sex?', shot: 2, id: 71},
      {question: 'Do you like to be treated like a slut in bed?', shot: 2, id: 72},
      {question: 'Does sex with 2 people of other gender turn you on?', shot: 2, id: 73},
      {question: 'Who fucks the best from people in here in your opinion?', shot: 2, id: 74},
      {question: 'Who’s the most attractive here?', shot: 2, id: 75},
      {question: 'Who would turn you on from people here?', shot: 2, id: 76},
      {question: 'Did you want to just fuck someone besides your partner, when you were in a relationship?', shot: 2, id: 77},
      {question: 'Would you do it for money?', shot: 1, id: 78},
      {question: 'Would you suck off the last guy that was before you in the queue?', shot: 2, id: 79},
      {question: 'Who would you fuck with from people here, if no one would found out about it?', shot: 2, id: 80},


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

