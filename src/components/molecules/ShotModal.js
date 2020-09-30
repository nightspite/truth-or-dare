import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModalWrapper = styled.div`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledModal = styled.div`
  background-color: white;
  font-weight: ${({ theme }) => theme.bold};
  color: black;
  width: 80vw;
  height: 50vh;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ShotModal = ({ handleClose, show, children }) => {
  return (
    <StyledModalWrapper
      style={{ display: show ? 'flex' : 'none' }}
      onClick={handleClose}
    >
      <StyledModal>{children}</StyledModal>
    </StyledModalWrapper>
  );
};

ShotModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ShotModal;
