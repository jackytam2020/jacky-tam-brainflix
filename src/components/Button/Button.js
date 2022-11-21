import React from 'react';
import './Button.scss';

function Button(props) {
  return (
    <button className="button" onClick={props.onClick} type={props.type}>
      <img src={props.icon} className="button__icon" alt="button icon" />
      <p className="button__text">{props.text}</p>
    </button>
  );
}

export default Button;
