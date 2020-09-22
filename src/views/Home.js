import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Players from 'components/molecules/Players';
import AddPlayer from 'components/molecules/AddPlayer';
import PropTypes from 'prop-types';

const Home = ({ players, deletePlayer, addPlayer }) => {
  return (
    <div className="home">
      <div className="card">
        <Players players={players} deletePlayer={deletePlayer} />

        <AddPlayer addPlayer={addPlayer} />

        {players.length > 0 ? (
          <Link to="/truthordare">
            <div className="start-btn">
              <i className="material-icons">play_arrow</i>{' '}
              <p>Let&apos;s play!</p>
            </div>
          </Link>
        ) : (
          <button type="button" className="start-btn" disabled>
            <i className="material-icons">play_arrow</i> <p>Let&apos;s play!</p>
          </button>
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePlayer: PropTypes.func.isRequired,
  addPlayer: PropTypes.func.isRequired,
};

export default withRouter(Home);
