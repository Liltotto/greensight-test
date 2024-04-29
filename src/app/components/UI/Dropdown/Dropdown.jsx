'use client'

import { useState } from "react";

import './dropdown.scss';

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Full time", "Half time", "Part time"];
  return (
    <div className="dropdown">
      <div className="dropdown__label">Form</div>
      <div className="dropdown__btn" onClick={() => setIsActive(!isActive)}>
        <span className={ selected == 'Not selected' ? '_unselected' : null }>{selected}</span>
        {
            isActive ? <img src="/arrows/chevronUp.svg" alt="arrow-up" /> : <img src="/arrows/chevronDown.svg" alt="arrow-down" />
        }
        {/* <img src="/arrows/chevronDown.svg" alt="arrow-down" /> */}
      </div>
      {isActive && (
        <div className="dropdown__content">
          {options.map((option) => (
            <div
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown__item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
