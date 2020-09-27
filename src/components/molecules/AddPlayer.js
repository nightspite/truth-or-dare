import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Add } from '@material-ui/icons';

class AddPlayer extends Component {
  state = {
    name: '',
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

  render() {
    const { name } = this.state;

    return (
      <div className="add-player">
        <form className="player-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="user-input"
            placeholder="Add player"
            onChange={this.handleChange}
            value={name}
          />

          <button type="submit">
            <Add />
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
