import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { withRouter } from 'react-router';

const AppWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  /* background: #1abc9c; */
  background: #83af9b;
  width: 100vw;
  height: 100vh;
`;

const MainTemplate = ({ children }) => (
  <AppWrapper>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </AppWrapper>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MainTemplate);
