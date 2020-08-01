import React, {
  useCallback,
  FormEvent,
  useEffect,
  useState,
  useMemo,
  useRef,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/form';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import {
  MessageContainer,
  Container,
  List,
  ListItem,
  ListItemCategoryContainer,
  ListItemButtonContainer,
  ListItemButton,
} from './styles';
import VideoCard from '../../../components/Carousel/components/VideoCard';

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
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const [isSaved, setSaved] = useState(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const { handleChange, values, clearForm, setValues } = useForm<Video>(
    initialValue,
  );
  const history = useHistory();

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const categoriaId = categorias.find(
        categoria => categoria.titulo === values.categoria,
      )?.id;

      await videosRepository.create({ ...values, categoriaId });
      clearForm();
      inputTitleRef.current?.focus();

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
        history.push('/');
      }, 1000);
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

  const handleEditVideo = useCallback(
    async id => {
      const selectedItem = videos.find(item => item.id === id);
      if (selectedItem) {
        setValues(selectedItem);
        window.scrollTo(0, 0);
        inputTitleRef.current?.focus();
      }
    },
    [setValues, videos],
  );

  const handleDeleteVideo = useCallback(async id => {
    await videosRepository.exclude(id);
    setVideos(state => state.filter(cat => cat.id !== id));
  }, []);

  const handleCleanClick = useCallback(async () => {
    clearForm();
    inputTitleRef.current?.focus();
  }, [clearForm]);

  useEffect(() => {
    videosRepository.getAll().then(response => {
      const list = response.map(item => {
        const { id, categoriaId, url, categoria, descricao, titulo } = item;
        return {
          id,
          categoriaId,
          url,
          categoria,
          descricao,
          titulo,
        } as Video;
      });
      setVideos(list);
    });
  }, []);

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de video</h1>

        <MessageContainer>
          {isSaved && <span>Dados salvos com sucesso</span>}
        </MessageContainer>

        <FormField
          type="text"
          text="Nome do Video"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
          ref={inputTitleRef}
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
        <Button type="button" onClick={handleCleanClick}>
          Limpar
        </Button>
        <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
          Nova categoria
        </Button>
      </form>
      <Container>
        <h1>Videos cadastradas</h1>

        <List>
          {videos.map(video => {
            const categoria = categorias.find(
              cat => cat.titulo === video.categoria,
            );
            const cor = categoria?.cor || '#ffffff';

            return (
              <ListItem key={video.id} cor={cor}>
                <strong>Titulo</strong>
                <p>{video.titulo}</p>

                <strong>Descrição</strong>
                <p>{video.descricao}</p>

                <ListItemCategoryContainer>
                  <div>
                    <strong>Categoria</strong>
                    <p>
                      {video.categoria}:<span>{cor}</span>
                    </p>
                  </div>
                  <VideoCard
                    videoTitle={video.titulo}
                    videoURL={video.url}
                    categoryColor="#000000"
                  />
                </ListItemCategoryContainer>

                <ListItemButtonContainer>
                  <ListItemButton onClick={() => handleEditVideo(video.id)}>
                    <FiEdit2 size={20} color="black" />
                  </ListItemButton>
                  <ListItemButton onClick={() => handleDeleteVideo(video.id)}>
                    <FiTrash2 size={20} color="black" />
                  </ListItemButton>
                </ListItemButtonContainer>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </PageDefault>
  );
};

export default CadastroVideo;
