import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import styled from 'styled-components';
import GameTemplate from 'templates/GameTemplate';
import { routes } from 'routes';

const StyledContentWrapper = styled.div`
  font-weight: ${({ theme }) => theme.bold};
  letter-spacing: 1.5px;
  text-align: center;
`;

const StyledHeading = styled(Heading)`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledButtonsWrapper = styled.div`
  text-align: center;
  position: absolute;
  bottom: 50px;
`;

const StyledSecondaryButton = styled(Button)`
  background-color: white;
  color: #212125;
  margin-bottom: 15px;
`;

const TruthOrDare = ({ players }) => {
  const randomPick = Math.floor(Math.random() * players.length);
  return (
    <GameTemplate>
      <StyledHeading>Whoopsie!</StyledHeading>
      <StyledContentWrapper>
        <Paragraph>It&apos;s {players[randomPick].name}</Paragraph>
      </StyledContentWrapper>

      <StyledButtonsWrapper>
        <StyledSecondaryButton as={Link} to={routes.truth}>
          TRUTH
        </StyledSecondaryButton>

        <Button as={Link} to={routes.dare}>
          DARE
        </Button>
      </StyledButtonsWrapper>
    </GameTemplate>
  );
};

TruthOrDare.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withRouter(TruthOrDare);
