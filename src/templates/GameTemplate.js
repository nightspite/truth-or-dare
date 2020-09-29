import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { Close } from '@material-ui/icons';
import styled from 'styled-components';
import FlexTemplate from 'templates/FlexTemplate';

const HomeButton = styled.button`
  border: 1px solid white;
  background-color: white;
  color: black;
  position: absolute;
  top: 30px;
  left: 0;
  padding: 5px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left: none;
  font-size: ${({ theme }) => theme.fontSize.m};

  -webkit-text-stroke: 5px black;
`;

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const GameTemplate = ({ children }) => (
  <StyledWrapper>
    <HomeButton as={Link} to={routes.home}>
      <Close />
    </HomeButton>
    <FlexTemplate>{children}</FlexTemplate>
  </StyledWrapper>
);

GameTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default GameTemplate;
