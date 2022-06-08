import React, { useState } from "react";
import T from "prop-types";
import "../../assets/css/Button.css";
function ConfirmationButton({ className, confirmation, onConfirm, ...props }) {
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const showConfirmation = () => setConfirmationVisible(true);
  const hideConfirmation = () => setConfirmationVisible(false);

  const handleClick = showConfirmation;
  const handleConfirmClick = () => {
    hideConfirmation();
    onConfirm();
  };
  const handleCancelClick = hideConfirmation;

  return (
    <>
      <button className={className} onClick={handleClick} {...props} />
      {confirmationVisible && (
        <div>
          {confirmation}
          <button
            className="styled-button-selected"
            onClick={handleConfirmClick}
          >
            Ok
          </button>
          <button
            className="styled-button-selected"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
}

ConfirmationButton.propTypes = {
  confirmation: T.node,
  onConfirm: T.func.isRequired,
};

ConfirmationButton.defaultProps = {
  confirmation: null,
};

export default ConfirmationButton;
