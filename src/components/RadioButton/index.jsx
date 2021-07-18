import React, { useMemo } from "react";
import PropTypes from "prop-types";
import style from "styled-components";
import "../RadioButton/RadioButton.css";
const Radio = (props) => {
  console.log("Inside Radio-button Component");
  const { text, onChange, selected, value } = props;
  return (
    <>
      <div className="radio-container" onClick={() => onChange(value)}>
        <div
          className={`radio-outer-circle ${value !== selected && "unselected"}`}
          tabIndex="0"
          role="button"
        >
          <div
            className={`radio-inner-circle ${
              value !== selected && "unselected-circle"
            }`}
          />
        </div>
        <div className="helper-text">{text}</div>
      </div>
    </>
  );
};

Radio.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Radio;
