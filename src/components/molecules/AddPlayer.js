import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayer extends Component {
  state = {
    name: '',
    gender: 'M',
  };

  handleChange = e => {
    if (e.target.value !== null) {
      this.setState({
        name: e.target.value,
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name } = this.state;
    const { addPlayer } = this.props;

    if (name) {
      addPlayer(this.state);
      this.setState({
        name: '',
      });
    }
  };

  handleOptionChange = e => {
    this.setState({
      gender: e.target.value,
    });
  };

  render() {
    const { gender, name } = this.state;

    return (
      <div className="add-player">
        <form className="player-form" onSubmit={this.handleSubmit}>
          <div className="switch">
            <input
              type="radio"
              name="gender"
              value="M"
              id="male"
              checked={gender === 'M'}
              onChange={this.handleOptionChange}
            />
            <label htmlFor="male" className="switch__label">
              M
            </label>

            <input
              type="radio"
              name="gender"
              value="F"
              id="female"
              checked={gender === 'F'}
              onChange={this.handleOptionChange}
            />
            <label htmlFor="female" className="switch__label">
              F
            </label>

            <div className="switch__indicator"></div>
          </div>

          <input
            type="text"
            id="user-input"
            placeholder="Add player"
            onChange={this.handleChange}
            value={name}
          />

          <button type="submit">
            <i className="material-icons">add</i>
          </button>
        </form>
      </div>
    );
  }
}

AddPlayer.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayer;
