import React, { Component } from 'react';
import Players from './Players';

const Home = ({players, deletePlayer}) => {
  return (
    <div className="add-players">
    <Players players={players} deletePlayer={deletePlayer}/>

    <div className="add-player"></div>
      <button className="start-btn">
      <i className="material-icons">play_arrow</i> <p>Let's play!</p>
      </button>
    </div>
  );
}

export default Home;

