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
const StyledHomeCard = styled.div`
  width: 80%;
  height: 80%;
  border: 3px solid #fff;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Home = ({ players, deletePlayer, addPlayer }) => {
  return (
    <StyledHomeWrapper className="home">
      <StyledHomeCard className="card">
        <Players players={players} deletePlayer={deletePlayer} />

        <AddPlayer addPlayer={addPlayer} />

        {players.length > 0 ? (
          <Link to="/truthordare">
            <Button>
              <PlayArrow />
              <p>Let&apos;s play!</p>
            </Button>
          </Link>
        ) : (
          <Button disabled>
            <PlayArrow />
            <p>Let&apos;s play!</p>
          </Button>
        )}
      </StyledHomeCard>
    </StyledHomeWrapper>
  );
};

Home.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePlayer: PropTypes.func.isRequired,
  addPlayer: PropTypes.func.isRequired,
};

export default withRouter(Home);
