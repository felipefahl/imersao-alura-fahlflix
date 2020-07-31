import React, {
  useCallback,
  FormEvent,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/form';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

interface Categoria {
  id: number;
  titulo: string;
  descricao: string;
  cor: string;
}

interface Video {
  id: number;
  categoria: string;
  titulo: string;
  descricao: string;
  url: string;
}

const initialValue = {
  titulo: '',
  descricao: '',
  url: '',
  categoria: '',
} as Video;

const CadastroVideo: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const { handleChange, values, clearForm } = useForm<Video>(initialValue);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const categoriaId = categorias.find(
        categoria => categoria.titulo === values.categoria,
      )?.id;

      await videosRepository.create({ ...values, categoriaId });
      clearForm();
      history.push('/');
    },
    [values, clearForm, history, categorias],
  );

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

  const categoryTitles = useMemo(() => categorias.map(({ titulo }) => titulo), [
    categorias,
  ]);

  // const handleDelete = useCallback(async id => {
  //   await api.delete(`videos/${id}`);
  //   setVideos(state => state.filter(cat => cat.id !== id));
  // }, []);

  // useEffect(() => {
  //   api.get<Video[]>('videos').then(response => setVideos(response.data));
  // }, []);

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de video</h1>
        <FormField
          type="text"
          text="Nome do Video"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />
        <FormField
          type="text"
          text="Link do video"
          value={values.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          text="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <FormField
          type="textarea"
          text="Descrição"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <Button type="submit">Gravar</Button>
        <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
          Nova categoria
        </Button>
      </form>
    </PageDefault>
  );
};

export default CadastroVideo;
