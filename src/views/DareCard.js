import React, { Component } from 'react';
import shot from 'assets/shot.png';
import Shot from 'components/molecules/Shot';
import { Link, withRouter } from 'react-router-dom';
import dares from 'json/dares.json';
import styled from 'styled-components';

const StyledShotImageWrapper = styled.div`
  position: absolute;
  bottom: 120px;
  left: 50%;
  padding: 10px;
  width: 69px;
  transform: translateX(-50%);
  border: 2px solid #fff;
  border-radius: 50px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-shadow: 0 0 25px 1px #212125;
  z-index: -1;
  cursor: pointer;
`;

const StyledShotImage = styled.img`
  margin-left: 50%;
  transform: translateX(-50%);
  width: 35px;
`;

class DareCard extends Component {
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
      <div className="truth-dare-card">
        <div className="card">
          <div className="label">DARE</div>
          <div className="content">
            <p>{dare.value}</p>
          </div>

          <Shot show={show} handleClose={this.hideModal}>
            <p>U have to drink</p>
            <p>{dare.shot}</p>
            <p>{dare.shot === 1 ? 'shot' : 'shots'}</p>
          </Shot>

          <StyledShotImageWrapper onClick={this.showModal}>
            <StyledShotImage src={shot} alt="shot" />
          </StyledShotImageWrapper>
          <Link to="/truthordare">
            <div className="next-round-btn">Next round</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(DareCard);
