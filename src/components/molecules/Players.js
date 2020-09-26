import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 20px 5px 8px 5px;
  text-align: left;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 900;
`;
const StyledCloseButton = styled.button`
  font-size: 11px;
  margin-left: auto;
  margin-right: 0;
  cursor: pointer;
  background: none;
  border: none;
  color: white;
`;

const Players = ({ players, deletePlayer }) => {
  const playerList = players.length ? (
    players.map(player => {
      return (
        <PlayerWrapper className="player" key={player.id}>
          <span>{player.name}</span>
          <StyledCloseButton
            type="button"
            onClick={() => {
              deletePlayer(player.id);
            }}
          >
            <i className="material-icons">close</i>
          </StyledCloseButton>
        </PlayerWrapper>
      );
    })
  ) : (
    <PlayerWrapper className="player no-players">
      <span>Add users</span>
    </PlayerWrapper>
  );
  return <div className="players">{playerList}</div>;
};

Players.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePlayer: PropTypes.func.isRequired,
};

export default Players;
