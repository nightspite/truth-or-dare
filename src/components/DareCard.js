import React, { Component } from 'react';
import shot from './shot.png';
import Shot from './Shot';
import {Link, withRouter} from 'react-router-dom';

class DareCard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render(){
    const {dares,randomPick} = this.props;
    return (
      <div className="truth-card">
        <div className="card">
          <div className="label">TRUTH</div>
          <div className="content">
            <p>{dares[randomPick].dare}</p>
          </div>

            <Shot show={this.state.show} handleClose={this.hideModal}>
              <p>U have to drink</p>
              <p>{dares[randomPick].shot}</p>
              <p>{dares[randomPick].shot === 1 ? "shot" : "shots"}</p>
            </Shot>

          <div className="shot" onClick={this.showModal}>
            <img src={shot} alt="shot"/>
          </div>
          <Link to='/truthordare'>
            <div className="next-round-btn">Next round</div>
          </Link>

        </div>
      </div>
    );
  }
}

export default withRouter(DareCard);

