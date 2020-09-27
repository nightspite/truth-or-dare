import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Players from 'components/molecules/Players';
import AddPlayer from 'components/molecules/AddPlayer';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import { PlayArrow } from '@material-ui/icons';

const StyledHomeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  color: #fff;
`;

const StyledPlayers = styled.div`
  max-height: calc(100% - 200px);
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  overflow: auto;
  padding: 0 10px;

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

const StyledPlayArrow = styled(PlayArrow)`
  font-size: 30px !important;
  margin-right: 5px;
`;

const StyledNoPlayers = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 20px 5px 8px 5px;
  text-align: left;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 900;
`;

const Home = ({ players, deletePlayer, addPlayer }) => {
  return (
    <StyledHomeWrapper>
      <StyledPlayers>
        {players.length ? (
          <Players players={players} deletePlayer={deletePlayer} />
        ) : (
          <StyledNoPlayers className="player no-players">
            <span>Add users</span>
          </StyledNoPlayers>
        )}
      </StyledPlayers>

      <AddPlayer addPlayer={addPlayer} />

      {players.length > 0 ? (
        <Button as={Link} to="/truthordare">
          <StyledPlayArrow />
          <p>Let&apos;s play!</p>
        </Button>
      ) : (
        <Button disabled>
          <StyledPlayArrow />
          <p>Let&apos;s play!</p>
        </Button>
      )}
    </StyledHomeWrapper>
  );
};

Home.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePlayer: PropTypes.func.isRequired,
  addPlayer: PropTypes.func.isRequired,
};

export default withRouter(Home);
