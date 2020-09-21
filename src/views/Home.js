import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Players from 'components/molecules/Players';
import AddPlayer from 'components/molecules/AddPlayer';

const Home = ({ players, deletePlayer, addPlayer }) => {
  return (
    <div className="home">
      <div className="card">
        <Players players={players} deletePlayer={deletePlayer} />

        <AddPlayer addPlayer={addPlayer} />

        {players.length > 0 ? (
          <Link to="/truthordare">
            <div className="start-btn">
              <i className="material-icons">play_arrow</i> <p>Let's play!</p>
            </div>
          </Link>
        ) : (
          <button className="start-btn" disabled>
            <i className="material-icons">play_arrow</i> <p>Let's play!</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default withRouter(Home);
