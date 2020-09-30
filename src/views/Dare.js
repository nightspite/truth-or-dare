import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ShotModal from 'components/molecules/ShotModal';
import dares from 'json/dares.json';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';
import Heading from 'components/atoms/Heading';
import { LocalBar } from '@material-ui/icons';
import { routes } from 'routes';
import GameTemplate from 'templates/GameTemplate';

const StyledImageWrapper = styled.div`
  color: white;
  background: transparent;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(LocalBar)`
  font-size: ${({ theme }) => theme.fontSize.l} !important;
`;

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

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 50px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

class Dare extends Component {
  state = { show: false, dare: '' };

  componentDidMount() {
    const randomDare = Math.floor(Math.random() * dares.length);
    const dare = dares[randomDare];

    this.setState({ dare });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { show, dare } = this.state;

    return (
      <GameTemplate>
        <StyledHeading>DARE</StyledHeading>
        <StyledContentWrapper>
          <Paragraph>{dare.value}</Paragraph>
        </StyledContentWrapper>

        <ShotModal show={show} handleClose={this.hideModal}>
          <Paragraph>U have to drink</Paragraph>
          <StyledParagraph>{dare.shot}</StyledParagraph>
          <Paragraph>{dare.shot === 1 ? 'shot' : 'shots'}</Paragraph>
        </ShotModal>

        <StyledImageWrapper onClick={this.showModal}>
          <StyledImage />
        </StyledImageWrapper>

        <StyledButton as={Link} to={routes.truthordare}>
          Next round
        </StyledButton>
      </GameTemplate>
    );
  }
}

export default withRouter(Dare);
