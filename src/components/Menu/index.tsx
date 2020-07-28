import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { Header } from './styles';
import Button from '../Button';

const Menu: React.FC = () => {
  return (
    <Header>
      <Link to="/">
        <img className="Logo" src={logo} alt="FahlFlix" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo video
      </Button>
    </Header>
  );
};

export default Menu;
