import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ShotModal from 'components/molecules/ShotModal';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';
import Heading from 'components/atoms/Heading';
import { LocalBar } from '@material-ui/icons';
import { routes } from 'routes';
import GameTemplate from 'templates/GameTemplate';
import PropTypes from 'prop-types';

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
  text-transform: uppercase;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 50px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

class Card extends Component {
  state = { show: false, task: '' };

  componentDidMount() {
    const { data } = this.props;

    const random = Math.floor(Math.random() * data.length);
    const task = data[random];

    this.setState({ task });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { show, task } = this.state;
    const { type } = this.props;

    return (
      <GameTemplate>
        <StyledHeading>{type}</StyledHeading>
        <StyledContentWrapper>
          <Paragraph>{task.value}</Paragraph>
        </StyledContentWrapper>

        <ShotModal show={show} handleClose={this.hideModal}>
          <Paragraph>U have to drink</Paragraph>
          <StyledParagraph>{task.shot}</StyledParagraph>
          <Paragraph>{task.shot === 1 ? 'shot' : 'shots'}</Paragraph>
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

Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};

export default withRouter(Card);
