import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Add } from '@material-ui/icons';
import styled from 'styled-components';

const StyledAddPlayerWrapper = styled.div`
  width: 70%;
  position: absolute;
  bottom: 130px;
`;

const StyledAddPlayerForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledAddPlayerInput = styled.input`
  min-width: 0;
  /* width: calc(100% - 103px); */
  width: 80%;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.9);
  background: none;
  color: #fff;
  padding: 0 5px;
  text-align: left;
  outline: none;
  padding: 5px 10px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const StyledAddPlayerButton = styled.button`
  border: none;
  border-radius: 50%;
  height: 19px;
  width: 19px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

const StyledAdd = styled(Add)`
  font-size: ${({ theme }) => theme.fontSize.m} !important;
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
            placeholder="Add player"
            onChange={this.handleChange}
            value={name}
          />

          <StyledAddPlayerButton type="submit">
            <StyledAdd />
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
