import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Shot from 'components/molecules/Shot';
import questions from 'json/questions.json';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';
import Heading from 'components/atoms/Heading';
import { LocalBar } from '@material-ui/icons';
import { routes } from 'routes';
import GameTemplate from 'templates/GameTemplate';

const StyledShotImageWrapper = styled.div`
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

const StyledShot = styled(LocalBar)`
  width: 35px;
  font-size: ${({ theme }) => theme.fontSize.m} !important;
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

class Truth extends Component {
  state = { show: false, question: '' };

  componentDidMount() {
    const randomQuestion = Math.floor(Math.random() * questions.length);
    const question = questions[randomQuestion];

    this.setState({ question });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { show, question } = this.state;

    return (
      <GameTemplate>
        <StyledHeading>TRUTH</StyledHeading>
        <StyledContentWrapper>
          <Paragraph>{question.value}</Paragraph>
        </StyledContentWrapper>

        <Shot show={show} handleClose={this.hideModal}>
          <Paragraph>U have to drink</Paragraph>
          <Paragraph>{question.shot}</Paragraph>
          <Paragraph>{question.shot === 1 ? 'shot' : 'shots'}</Paragraph>
        </Shot>

        <StyledShotImageWrapper onClick={this.showModal}>
          <StyledShot />
        </StyledShotImageWrapper>

        <StyledButton as={Link} to={routes.truthordare}>
          Next round
        </StyledButton>
      </GameTemplate>
    );
  }
}

export default withRouter(Truth);
