import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { Close } from '@material-ui/icons';
import styled from 'styled-components';

const StyledHomeButton = styled.button`
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
`;

const HomeButton = () => (
  <StyledHomeButton as={Link} to={routes.home}>
    <Close />
  </StyledHomeButton>
);

export default HomeButton;
