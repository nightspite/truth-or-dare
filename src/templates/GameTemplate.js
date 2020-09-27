import React from 'react';
import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GameTemplate = ({ children }) => (
  <Link to="/" className="home-btn">
    <button type="button">
      <Home />
      {children}
    </button>
  </Link>
);

GameTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GameTemplate;
