import React from 'react';
import './InputForm.scss';

function InputForm(props) {
  return (
    <div className="input-block">
      <p className="input-block__header">{props.label}</p>
      <input
        className={'input-block__input'}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default InputForm;
