import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  /* padding: 0 30px 50px 30px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const HomeTemplate = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

HomeTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default HomeTemplate;
