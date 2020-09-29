import React from 'react';
import PropTypes from 'prop-types';

const Shot = ({ handleClose, show, children }) => {
  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          close
        </button>
      </section>
    </div>
  );
};

Shot.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Shot;
