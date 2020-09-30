import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexTemplate from 'templates/FlexTemplate';
import HomeButton from 'components/molecules/HomeButton';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const GameTemplate = ({ children }) => (
  <StyledWrapper>
    <HomeButton />
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
