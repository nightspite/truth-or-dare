import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { Home } from '@material-ui/icons';
import styled from 'styled-components';

const HomeButton = styled.button`
  border: 2px solid white;
`;

const GameTemplate = ({ children }) => (
  <>
    <HomeButton as={Link} to={routes.home}>
      <Home />
    </HomeButton>
    {children}
  </>
);

GameTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default GameTemplate;
