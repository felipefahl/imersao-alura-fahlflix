import React, {
  useState,
  useCallback,
  FormEvent,
  useEffect,
  useRef,
} from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/form';
import {
  MessageContainer,
  Container,
  List,
  ListItem,
  ListItemButtonContainer,
  ListItemButton,
} from './styles';
import categoriasRepository from '../../../repositories/categorias';

interface Categoria {
  id?: number;
  titulo: string;
  descricao: string;
  cor: string;
}

const initialValue = { titulo: '', descricao: '', cor: '#ffffff' } as Categoria;

const CadastroCategoria: React.FC = () => {
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const [isSaved, setSaved] = useState(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const { handleChange, values, clearForm, setValues } = useForm<Categoria>(
    initialValue,
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const { titulo, descricao, cor, id } = values;
      if (id) {
        await categoriasRepository.update({ id, titulo, descricao, cor });
        setCategorias(state =>
          state.map(item => (item.id === id ? values : item)),
        );
      } else {
        await categoriasRepository.create({ titulo, descricao, cor });
        setCategorias(state => [...state, values]);
      }
      clearForm();
      inputTitleRef.current?.focus();

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2000);
    },
    [values, clearForm],
  );

  const handleEditCategoria = useCallback(
    async id => {
      const selectedItem = categorias.find(item => item.id === id);
      if (selectedItem) {
        setValues(selectedItem);
        window.scrollTo(0, 0);
        inputTitleRef.current?.focus();
      }
    },
    [setValues, categorias],
  );

  const handleDeleteCategoria = useCallback(async id => {
    await categoriasRepository.exclude(id);
    setCategorias(state => state.filter(cat => cat.id !== id));
  }, []);

  const handleCleanClick = useCallback(async () => {
    clearForm();
    inputTitleRef.current?.focus();
  }, [clearForm]);

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
      <MessageContainer>
        {isSaved && <span>Dados salvos com sucesso</span>}
      </MessageContainer>

      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          text="Título da Categoria"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
          ref={inputTitleRef}
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
        <Button type="button" onClick={handleCleanClick}>
          Limpar
        </Button>
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

              <ListItemButtonContainer>
                <ListItemButton
                  onClick={() => handleEditCategoria(categoria.id)}
                >
                  <FiEdit2 size={20} color="black" />
                </ListItemButton>
                <ListItemButton
                  onClick={() => handleDeleteCategoria(categoria.id)}
                >
                  <FiTrash2 size={20} color="black" />
                </ListItemButton>
              </ListItemButtonContainer>
            </ListItem>
          ))}
        </List>
      </Container>
    </PageDefault>
  );
};

export default CadastroCategoria;
