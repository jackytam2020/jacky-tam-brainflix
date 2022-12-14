import React from 'react';
import './TextAreaInput.scss';

function TextAreaInput(props) {
  return (
    <div className="text-area-block">
      <p className="text-area-block__header">{props.label}</p>
      <textarea
        className={props.inputClassName}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
      ></textarea>
    </div>
  );
}

export default TextAreaInput;
