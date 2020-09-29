import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Players from 'components/molecules/Players';
import AddPlayer from 'components/molecules/AddPlayer';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';
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

const StyledPlayArrow = styled(PlayArrow)`
  font-size: 30px !important;
  margin-right: 5px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const Home = ({ players, deletePlayer, addPlayer }) => {
  return (
    <StyledHomeWrapper>
      <Players players={players} deletePlayer={deletePlayer} />

      <AddPlayer addPlayer={addPlayer} />

      {players.length > 0 ? (
        <Button as={Link} to="/truthordare">
          <StyledPlayArrow />
          <StyledParagraph>Let&apos;s play!</StyledParagraph>
        </Button>
      ) : (
        <Button disabled>
          <StyledPlayArrow />
          <StyledParagraph>Let&apos;s play!</StyledParagraph>
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
