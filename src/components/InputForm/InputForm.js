import React from 'react';
import './InputForm.scss';

function InputForm(props) {


  return (
    <div className="input-block">
      <p className="input-block__header">{props.label}</p>
      <input
        className={props.inputClassName}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
      ></input>
    </div>
  );
}

export default InputForm;
