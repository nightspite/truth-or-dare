import React from 'react';
import Players from './Players';
import AddPlayer from './AddPlayer';

const Home = ({players, deletePlayer, addPlayer}) => {
  return (
    <div className="add-players">
    <Players players={players} deletePlayer={deletePlayer}/>

      <AddPlayer addPlayer={addPlayer} />

      <button className="start-btn">
        <i className="material-icons">play_arrow</i> <p>Let's play!</p>
      </button>
    </div>
  );
}

export default Home;

