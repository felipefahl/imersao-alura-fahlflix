import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Menu.css';
import Button from '../Button';

const Menu: React.FC = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="FahlFlix" />
      </a>
      <Button href="/">Novo vídeo</Button>
    </nav>
  );
};

export default Menu;
