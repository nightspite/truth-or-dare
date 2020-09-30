import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Close } from '@material-ui/icons';

const StyledPlayersWrapper = styled.div`
  max-height: calc(100% - 200px);
  width: 70%;
  overflow: auto;
  padding: 0 10px;
  margin-top: 20px;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;

const StyledPlayerWrapper = styled.div`
  border-bottom: 2px solid rgba(255, 255, 255, 0.9);
  padding: 20px 5px 8px 5px;
  text-align: left;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
`;
const StyledCloseButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.m} !important;
  margin-left: auto;
  margin-right: 0;
  cursor: pointer;
  background: none;
  border: none;
  color: white;
`;

const StyledNoPlayers = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 20px 5px 8px 5px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
`;

const Players = ({ players, deletePlayer }) => (
  <StyledPlayersWrapper>
    {players.length > 0 ? (
      players.map(player => {
        return (
          <StyledPlayerWrapper key={player.id}>
            {player.name}

            <StyledCloseButton
              onClick={() => {
                deletePlayer(player.id);
              }}
              as={Close}
            />
          </StyledPlayerWrapper>
        );
      })
    ) : (
      <StyledNoPlayers>Add users</StyledNoPlayers>
    )}
  </StyledPlayersWrapper>
);

Players.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePlayer: PropTypes.func.isRequired,
};

export default Players;
