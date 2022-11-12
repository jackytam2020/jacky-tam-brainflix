import React from 'react';
import './TextAreaInput.scss';

function TextAreaInput(props) {
  return (
    <div className="text-area-block">
      <p className="text-area-block__header">{props.label}</p>
      <textarea
        className={'text-area-block__input'}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
}

export default TextAreaInput;
