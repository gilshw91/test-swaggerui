import React from "react";
import PropTypes from "prop-types";

import "./Modal.css";

const Modal = ({ isShowing, hide }) =>
  isShowing ? (
    <>
      <div className="modal-overlay">
        <div
          className="modal-wrapper"
          aria-modal
          aria-hidden
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal">
            <div className="modal-header">
              <button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <p>Hello, I'm a modal.</p>
          </div>
        </div>
      </div>
    </>
  ) : null;

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

export default Modal;