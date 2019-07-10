import React from 'react';
import Players from './Players';
import AddPlayer from './AddPlayer';
import {Link, withRouter} from 'react-router-dom';


const Home = ({players, deletePlayer, addPlayer}) => {
  return (
    <div className="home">
      <div className="card">
        <Players players={players} deletePlayer={deletePlayer}/>

        <AddPlayer addPlayer={addPlayer} />

        {players.length > 0 ? (
            <Link to="/truthordare">
            <div className="start-btn">
              <i className="material-icons">play_arrow</i> <p>Let's play!</p>
            </div>
          </Link>
          ) : (
            <button className="start-btn">
              <i className="material-icons">play_arrow</i> <p>Let's play!</p>
            </button>
          )}

      </div>
    </div>
  );
}

export default withRouter(Home);

