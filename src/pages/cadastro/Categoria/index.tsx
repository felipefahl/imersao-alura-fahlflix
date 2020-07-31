import React, { useState, useCallback, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/form';
import { Container, List, ListItem, ListItemButton } from './styles';
import categoriasRepository from '../../../repositories/categorias';

interface Categoria {
  id: number;
  titulo: string;
  descricao: string;
  cor: string;
}

const initialValue = { titulo: '', descricao: '', cor: '' } as Categoria;

const CadastroCategoria: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const { handleChange, values, clearForm } = useForm<Categoria>(initialValue);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const { titulo, descricao, cor } = values;
      await categoriasRepository.create({ titulo, descricao, cor });

      setCategorias(state => [...state, values]);
      clearForm();
    },
    [values, clearForm],
  );

  const handleDeleteCategoria = useCallback(async id => {
    await categoriasRepository.exclude(id);
    setCategorias(state => state.filter(cat => cat.id !== id));
  }, []);

  useEffect(() => {
    categoriasRepository.getAll().then(response => {
      const list = response.map(item => {
        const { id, descricao, titulo, cor } = item;
        return {
          id,
          descricao,
          titulo,
          cor,
        } as Categoria;
      });

      setCategorias(list);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          text="Título da Categoria"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          type="textarea"
          text="Descrição"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          type="color"
          text="Cor"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button type="submit">Gravar</Button>
        <Button as={Link} className="ButtonLink" to="/">
          Ir para home
        </Button>
      </form>
      <Container>
        <h1>Categorias cadastradas</h1>

        <List>
          {categorias.map(categoria => (
            <ListItem key={categoria.id} cor={categoria.cor}>
              <strong>Titulo</strong>
              <p>{categoria.titulo}</p>

              <strong>Descrição</strong>
              <p>{categoria.descricao}</p>

              <strong>Cor</strong>
              <span>{categoria.cor}</span>

              <ListItemButton
                onClick={() => handleDeleteCategoria(categoria.id)}
              >
                <FiTrash2 size={20} color="black" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </PageDefault>
  );
};

export default CadastroCategoria;
