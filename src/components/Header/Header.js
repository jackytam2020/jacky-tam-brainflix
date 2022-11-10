import React from 'react';
import './Header.scss';
import LogoBlock from '../LogoBlock/LogoBlock';
import SearchBar from '../SearchBar/SearchBar';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import UploadIcon from '../../assets/icons/upload.svg';

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo-block">
        <Link to={'/'}>
          <LogoBlock />
        </Link>
      </div>
      <div className="header__right">
        <div className="header__search-bar">
          <SearchBar />
        </div>
        <div className="header__avatar">
          <Avatar />
        </div>
        <div className="header__button">
          <Link to={'/Upload'}>
            <Button icon={UploadIcon} text={'UPLOAD'} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
