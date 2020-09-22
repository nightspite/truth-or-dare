import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const TruthOrDare = ({ players }) => {
  const randomPick = Math.floor(Math.random() * players.length);
  return (
    <div className="truth-or-dare">
      {/* <Players players={players}/> */}

      <div className="card">
        <Link to="/truthcard" className="truth-link">
          <div className="truth">TRUTH</div>
        </Link>

        <div className="player">{players[randomPick].name}</div>

        <Link to="/darecard" className="dare-link">
          <div className="dare">DARE</div>
        </Link>
      </div>
    </div>
  );
};

TruthOrDare.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withRouter(TruthOrDare);
