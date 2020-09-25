import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const PlayerWrapper

const Players = ({ players, deletePlayer }) => {
  const playerList = players.length ? (
    players.map(player => {
      return (
        <div className="player" key={player.id}>
          <span>{player.name}</span>
          <button
            type="button"
            onClick={() => {
              deletePlayer(player.id);
            }}
          >
            <i className="material-icons">close</i>
          </button>
        </div>
      );
    })
  ) : (
    <div className="player no-players">
      <span>Add users</span>
    </div>
  );
  return <div className="players">{playerList}</div>;
};

Players.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePlayer: PropTypes.func.isRequired,
};

export default Players;
