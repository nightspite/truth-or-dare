import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Add } from '@material-ui/icons';
import styled from 'styled-components';

const StyledAddPlayerWrapper = styled.div`
  width: 70%;
`;

const StyledAddPlayerForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledAddPlayerInput = styled.input`
  min-width: 0;
  /* width: calc(100% - 103px); */
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.9);
  background: none;
  color: #fff;
  padding: 0 5px;
  text-align: center;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const StyledAddPlayerButton = styled.button`
  border: none;
  background: none;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  outline: none;
`;

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
      <StyledAddPlayerWrapper>
        <StyledAddPlayerForm onSubmit={this.handleSubmit}>
          <StyledAddPlayerInput
            type="text"
            id="user-input"
            placeholder="Add player"
            onChange={this.handleChange}
            value={name}
          />

          <StyledAddPlayerButton type="submit">
            <Add />
          </StyledAddPlayerButton>
        </StyledAddPlayerForm>
      </StyledAddPlayerWrapper>
    );
  }
}

AddPlayer.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayer;
