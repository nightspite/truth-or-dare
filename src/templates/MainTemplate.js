import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { withRouter } from 'react-router';

const AppWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  /* background: ${theme.background}; */
  background-image: radial-gradient(circle, #5cecc0, #50e1b6, #44d6ab, #36cca1, #26c197, #1db88e, #12ae86, #02a57d, #029b73, #02916a, #018761, #007d58);
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
