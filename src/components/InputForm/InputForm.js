import React from 'react';
import './InputForm.scss';

function InputForm(props) {
  return (
    <div className="input-block">
      <p className="input-block__header">{props.label}</p>
      <textarea
        className={
          props.size === 'large'
            ? 'input-block__input input-block__input--large'
            : 'input-block__input'
        }
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
}

export default InputForm;
