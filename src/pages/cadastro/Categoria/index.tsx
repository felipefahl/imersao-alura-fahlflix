import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

interface Categoria {
  nome: string;
  descricao: string;
  cor: string;
}

const initialValue = { nome: '', descricao: '', cor: '' } as Categoria;

const CadastroCategoria: React.FC = () => {
  const [valores, setValores] = useState<Categoria>(initialValue);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const handleCategoryChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const key = event.target.getAttribute('name') || '';
      setValores(state => ({ ...state, [key]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      setCategorias(state => [...state, valores]);
      setValores(initialValue);
    },
    [valores],
  );

  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          text="Nome da Categoria"
          value={valores.nome}
          name="nome"
          onChange={handleCategoryChange}
        />

        <FormField
          type="textarea"
          text="Descrição"
          value={valores.descricao}
          name="descricao"
          onChange={handleCategoryChange}
        />

        <FormField
          type="color"
          text="Cor"
          value={valores.cor}
          name="cor"
          onChange={handleCategoryChange}
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={indice}>{categoria.nome}</li>;
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
