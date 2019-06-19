import React, { Component } from 'react';
import Players from './Players';

class Home extends Component {
  render(){
    return (
     <div className="add-players">
      <Players players={this.props.players} deletePlayer={this.props.deletePlayer}/>
      
      <div className="add-player"></div>
        <button className="start-btn">
        <i className="material-icons">play_arrow</i> <p>Let's play!</p>
        </button>
     </div>
    );
  }
}

export default Home;

