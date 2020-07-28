import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
// import { FooterBase } from './styles';

const CadastroVideo: React.FC = () => {
  return (
    <PageDefault>
      <h1>Cadastro de video</h1>
      <Link to="/cadastro/categoria">Nova categoria</Link>
    </PageDefault>
  );
};

export default CadastroVideo;
