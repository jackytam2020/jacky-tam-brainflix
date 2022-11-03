import React from 'react';
import './Header.scss';
import LogoBlock from '../LogoBlock/LogoBlock';
import SearchBar from '../SearchBar/SearchBar';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo-block">
        <LogoBlock />
      </div>
      <div className="header__right">
        <div className="header__search-bar">
          <SearchBar />
        </div>
        <div className="header__avatar">
          <Avatar />
        </div>
        <div className="header__button">
          <Button text={'UPLOAD'} />
        </div>
      </div>
    </header>
  );
}

export default Header;
