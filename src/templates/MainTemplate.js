import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { withRouter } from 'react-router';
// import PageContext from 'context';

const MainTemplate = children => (
  // const { pageType } = this.state;
  <div className="App">
    {/* <PageContext.Provider value={pageType}> */}
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    {/* </PageContext.Provider> */}
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MainTemplate);
