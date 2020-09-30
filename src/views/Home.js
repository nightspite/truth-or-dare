import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Players from 'components/molecules/Players';
import AddPlayer from 'components/molecules/AddPlayer';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';
import { PlayArrow } from '@material-ui/icons';
import HomeTemplate from 'templates/HomeTemplate';

const StyledPlayArrow = styled(PlayArrow)`
  font-size: 30px !important;
  margin-right: 5px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 50px;
`;

const Home = ({ players, deletePlayer, addPlayer }) => {
  return (
    <HomeTemplate>
      <Players players={players} deletePlayer={deletePlayer} />

      <AddPlayer addPlayer={addPlayer} />

      {players.length > 0 ? (
        <StyledButton as={Link} to="/truthordare">
          <StyledPlayArrow />
          <StyledParagraph>Let&apos;s play!</StyledParagraph>
        </StyledButton>
      ) : (
        <StyledButton disabled>
          <StyledPlayArrow />
          <StyledParagraph>Let&apos;s play!</StyledParagraph>
        </StyledButton>
      )}
    </HomeTemplate>
  );
};

Home.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePlayer: PropTypes.func.isRequired,
  addPlayer: PropTypes.func.isRequired,
};

export default withRouter(Home);
