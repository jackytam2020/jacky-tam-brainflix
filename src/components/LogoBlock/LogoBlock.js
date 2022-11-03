import React from 'react';
import './LogoBlock.scss';
import Logo from '../../assets/logo/BrainFlix-logo.svg';

function LogoBlock(props) {
  return (
    <div className="logo-block">
      <img className="logo-block__logo" src={Logo} />
    </div>
  );
}

export default LogoBlock;
