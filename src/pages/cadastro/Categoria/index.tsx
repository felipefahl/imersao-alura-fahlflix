import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
// import { FooterBase } from './styles';

const CadastroCategoria: React.FC = () => {
  return (
    <PageDefault>
      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button type="button">Cadastrar</button>
      </form>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
