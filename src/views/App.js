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
      {question: 'Would you rather fuck someone 20 years older or 20 years younger?', shot: 2, id: 81},
      {question: 'Who’s the hottest person here?', shot: 2, id: 82},
      {question: 'Who here are you most jealous of?', shot: 2, id: 83},
      {question: 'How many people have you kissed?', shot: 2, id: 84},
      {question: 'Do you like telling what to do in bed, or do you prefer to be told what to do?', shot: 2, id: 85},
      {question: 'What’s the most number of times you’ve done it in one day?', shot: 2, id: 86},
      {question: 'Would you take a shower/bath with person in front of you?', shot: 2, id: 87},
      {question: 'What’s the worst kiss you’ve ever been given?', shot: 1, id: 88},
      {question: 'What’s your favorite body part on a guy?', shot: 1, id: 89},
      {question: 'How do you like the taste when you go down on someone?', shot: 1, id: 90},
      {question: 'How often do you trim down there?', shot: 1, id: 91},
      {question: 'Have you ever considered a threesome?', shot: 2, id: 92},
      {question: 'Have you ever had a one night stand?', shot: 2, id: 93},
      {question: 'What was the most powerful sexual experience you’ve ever had?', shot: 2, id: 94},
      {question: 'What sex act would you never do again?', shot: 2, id: 95},
      {question: 'What’s a sex act most people like that you think is overrated?', shot: 2, id: 96},
      {question: 'Have you ever kicked someone out of your bed immediately after having sex?', shot: 1, id: 97},
      {question: 'What’s one thing guaranteed to turn you on?', shot: 2, id: 98},
      {question: 'What do you find the sexiest about person on your left?', shot: 2, id: 99},
      {question: 'If you could pick one person to join you and your partner for a threesome, who would it be? (If you are single pick two people)', shot: 2, id: 100},
      {question: 'What’s your dirtiest sex fantasy?', shot: 2, id: 101},
      {question: 'What’s the kinkiest thing you’ve ever done?', shot: 2, id: 102},
      {question: 'Suppose person in front of you is yours for 20 minutes, what is the first thing you want to do with him/her?', shot: 2, id: 103},
      {question: 'Which one do you prefer the most – rough or smooth?', shot: 2, id: 104},
      {question: 'Do you like being drunk when having sex?', shot: 2, id: 105},
      {question: 'Favorite position?', shot: 2, id: 106},
      {question: 'How many times can you do in a day?', shot: 2, id: 107},
      {question: 'Have you made with someone of the same gender?', shot: 2, id: 108},
      {question: 'What do you prefer lights on or lights off?', shot: 2, id: 109},
      {question: 'How many people saw you without anything?', shot: 2, id: 110},
      {question: 'Describe your partner.', shot: 2, id: 111},
      {question: 'Have you ever used a toy?', shot: 2, id: 112},
      {question: 'What do you like the most about your partner?', shot: 2, id: 113},
      {question: 'Do you like to have tattoos on your hand?', shot: 2, id: 114},
      {question: 'When was the last time you trimmed?', shot: 2, id: 115},
      {question: 'What was your best sexual experience?', shot: 2, id: 116},
      {question: 'What is the longest you’ve ever given head?', shot: 2, id: 117},
      {question: 'How do you feel about sex in groups?', shot: 2, id: 118},
      {question: 'Would you like to take part in an orgy?,.', shot: 2, id: 119},
      {question: 'Would you ever watch your partner have sex with someone else?', shot: 2, id: 120},
      {question: 'Where is your favourite place to be kissed?', shot: 2, id: 121},
      {question: 'Have you ever taken it in the butt or would you?', shot: 2, id: 122},
      {question: 'Do you enjoy rough or slow sex?', shot: 2, id: 123},
      {question: 'Do you prefer to be on top or bottom?', shot: 2, id: 124},
      {question: 'What is your least favourite position?', shot: 2, id: 125},
      {question: 'Have you ever had sex outside?', shot: 2, id: 126},
      {question: 'Where is the strangest place you’ve ever had sex?', shot: 2, id: 127},
      {question: 'Who is your favourite porn star?', shot: 2, id: 128},
      {question: 'What is your favourite type of porn?', shot: 2, id: 129},
      {question: 'Does size matter? And what\'s the perfect dick size?', shot: 2, id: 130},
      {question: 'Do you prefer to have music in the background, or for it to be be quiet?,.,.', shot: 2, id: 131},
      {question: 'Do you prefer for your partner to be silent, or do you like moans?', shot: 2, id: 132},
      {question: 'Do you like a lot of foreplay?', shot: 2, id: 133},
      {question: 'What is your favourite type of foreplay?', shot: 2, id: 134},
      {question: 'Have you done role-playing?', shot: 2, id: 135},
      {question: 'What is your role-playing fantasy?', shot: 2, id: 136},
      {question: 'Would you ever have sex for money?', shot: 2, id: 137},
      {question: 'How many orgasms have you had in one sexual encounter?', shot: 2, id: 138},
      {question: 'Would you ever eat the booty of person that\'s sitting in front of you?', shot: 2, id: 139},
      {question: 'Do you like giving head?', shot: 2, id: 140},
      {question: 'If you could invite any of your friends into the bedroom, who would it be?', shot: 2, id: 141},
      {question: 'Would you ever want to go to a swingers party?', shot: 2, id: 142},
      {question: 'Do you ever dreamed about the sex you had with someone?', shot: 2, id: 143},
      {question: 'Would you ever want to have sex with one of my friends? If so, who?', shot: 2, id: 144},
      {question: 'What is the thing that I do that makes you cum every time?', shot: 2, id: 145},
      {question: 'Which part of the body of the person sitting in front of you would like to massage?', shot: 2, id: 146},
      {question: 'Do you like drunk sex?', shot: 2, id: 147},
      {question: 'Do you like “doggy-style” or “missionary” better?', shot: 2, id: 148},
      {question: 'Would you ever want to make a video with me?', shot: 2, id: 149}
    ],
    dares: [
      {dare: 'Kill yourself', shot: 2137, id: 1},
      {dare: 'Have someone blindfold you. Then, everyone in the group kisses you on the cheek, and you have to either say which one is your partner, and then kiss them on the lips, OR, you have to choose one person that you want to kiss on the lips.', shot: 3, id: 2},
      {dare: 'With your eyes closed and the other person or people standing across from you in the room, walk with your hands out. You have to kiss the first person you touch, where you touch them.', shot: 3, id: 3},
      {dare: 'You have to undress down to your accessories and skivvies. If you want to keep any clothes on, you have to take a shot for every piece of clothing you want to keep.', shot: 'custom', id: 4},
      {dare: 'Take off your bra but leave your shirt on.', shot: 3, id: 5},
      {dare: 'Try to take off your underwear without flashing anyone.', shot: 3, id: 6},
      {dare: 'Touch tongues with someone of different sex.', shot: 2, id: 7},
      {dare: 'Close your eyes, scroll through your contacts list and tell me the sexiest thing about the person you you land on.', shot: 3, id: 8},
      {dare: 'Sing the chorus of a song you’ve had sex to.', shot: 2, id: 9},
      {dare: 'Send a message to someone you want to sleep with describing a dirty dream you’ve had about them.', shot: 4, id: 10},
      {dare: 'Try on someone else\'s underwear.', shot: 2, id: 11},
      {dare: 'Take off your pants for the rest of the game.', shot: 3, id: 12},
      {dare: 'Take off your shirt for the rest of the game.', shot: 3, id: 13},
      {dare: 'Show person in front of you the sexiest picture you have on your phone.', shot: 3, id: 14},
      {dare: 'Spank person in front of you as hard as you can.', shot: 2, id: 15},
      {dare: 'Ask anyone of your friends like your face.', shot: 2, id: 16},
      {dare: 'Twerk in only your underwear.', shot: 3, id: 17},
      {dare: 'Take off 3rd person\'s (counting to the left) underwear using only your teeth.', shot: 3, id: 18},
      {dare: 'Put your hand down 4rd person\'s (counting to the right) pants until the next round.', shot: 3, id: 19},
      {dare: 'Make out with the person to the right of you.', shot: 3, id: 20},
      {dare: 'Give your partner head for 3 minutes.', shot: 3, id: 21},
      {dare: 'Blindfold yourself, spin around for ten seconds, who ever you are pointing to at the end, you have to kiss him/her.', shot: 3, id: 22},
      {dare: 'Give a hand job for 3 minutes.', shot: 3, id: 23},
      {dare: 'Make love with your partner for 3 minutes only.', shot: 3, id: 24},
      {dare: 'Take off your partner’s bra (or nearest woman’s) using only your teeth.', shot: 3, id: 25},
      {dare: 'Send a nude to your ex.', shot: 3, id: 26},
      {dare: 'Pull up your favourite porn site your phone right now.', shot: 2, id: 27},
      {dare: 'Give head to the person next to you for 2 full songs.', shot: 3, id: 28},
      {dare: 'Make your partner cum using only your hands.', shot: 3, id: 29},
      {dare: 'Give someone head for three full songs, or until I cum, whichever comes first.', shot: 3, id: 30},
      {dare: 'Eat someone\'s booty out.', shot: 3, id: 31},
      {dare: 'Ride someone\'s dick for 3 minutes only.', shot: 3, id: 32},
      {dare: 'Let someone put a finger in your booty.', shot: 3, id: 33},
      {dare: 'Take someone\'s underwear using only your teeth.', shot: 3, id: 34},
      {dare: 'Pick your favourite porn, let’s watch it together and do exactly what they do.', shot: 3, id: 35},
      {dare: 'Let someone sit on your face while you give him/her head.', shot: 3, id: 36},
      {dare: 'Invite one of your friends over for threesome.', shot: 3, id: 37}
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

