import React, { Component } from 'react';
import shot from 'assets/shot.png';
import { Link, withRouter } from 'react-router-dom';
import Shot from 'components/molecules/Shot';
import questions from 'json/questions.json';
import styled from 'styled-components';

const ShotImageWrapper = styled.div`
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

const ShotImage = styled.img`
  margin-left: 50%;
  transform: translateX(-50%);
  width: 35px;
`;

class TruthCard extends Component {
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
      <div className="truth-dare-card">
        <div className="card">
          <div className="label">TRUTH</div>
          <div className="content">
            <p>{question.value}</p>
          </div>

          <Shot show={show} handleClose={this.hideModal}>
            <p>U have to drink</p>
            <p>{question.shot}</p>
            <p>{question.shot === 1 ? 'shot' : 'shots'}</p>
          </Shot>

          <ShotImageWrapper onClick={this.showModal}>
            <ShotImage src={shot} alt="shot" />
          </ShotImageWrapper>
          <Link to="/truthordare">
            <div className="next-round-btn">Next round</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(TruthCard);
