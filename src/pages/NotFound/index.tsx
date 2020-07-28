import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundError } from './styles';
import logo from '../../assets/images/logo.svg';

const NotFound: React.FC = () => {
  return (
    <NotFoundError>
      <div className="error">
        Ops...
        <Link to="/">
          <img className="Logo" src={logo} alt="FahlFlix" />
        </Link>
        procurou muito mas não encontramos sua página...
      </div>
      <div className="container">
        <div className="error404page">
          <div className="newcharacter404">
            <div className="chair404" />
            <div className="leftshoe404" />
            <div className="rightshoe404" />
            <div className="legs404" />
            <div className="torso404">
              <div className="body404" />
              <div className="leftarm404" />
              <div className="rightarm404" />
              <div className="head404">
                <div className="eyes404" />
              </div>
            </div>
            <div className="laptop404" />
          </div>
        </div>
      </div>
    </NotFoundError>
  );
};

export default NotFound;
