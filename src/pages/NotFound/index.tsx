import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { NotFoundError, Background } from './styles';
import logo from '../../assets/images/logo.svg';

const NotFound: React.FC = () => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <>
      <NotFoundError>
        <div className="error">
          Ops...
          <Link to="/">
            <img className="Logo" src={logo} alt="FahlFlix" />
          </Link>
        </div>
      </NotFoundError>
      <Background onClick={handleClick} />
    </>
  );
};

export default NotFound;
