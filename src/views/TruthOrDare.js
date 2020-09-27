import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import styled from 'styled-components';
import GameTemplate from 'templates/GameTemplate';

const StyledButton = styled(Button)`
  background-color: white;
  color: #212125;
`;

const TruthOrDare = ({ players }) => {
  const randomPick = Math.floor(Math.random() * players.length);
  return (
    <GameTemplate>
      <Heading className="player">{players[randomPick].name}</Heading>

      <StyledButton as={Link} to="/truthcard">
        TRUTH
      </StyledButton>

      <Button as={Link} to="/darecard">
        DARE
      </Button>
    </GameTemplate>
  );
};

TruthOrDare.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withRouter(TruthOrDare);
