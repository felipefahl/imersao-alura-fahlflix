import api from '../services/api';

const URL_VIDEOS = `/videos`;

export interface Video {
  id?: number;
  categoriaId?: number;
  categoria: string;
  url: string;
  titulo: string;
  descricao: string;
}

const getAll = async (): Promise<Video[]> => {
  const response = await api.get<Video[]>(`${URL_VIDEOS}`);
  return response.data;
};

const create = async (objetoDoVideo: Video): Promise<Video> => {
  const response = await api.post<Video>(`${URL_VIDEOS}`, {
    ...objetoDoVideo,
  });
  return response.data;
};

const update = async ({
  id,
  categoriaId,
  categoria,
  url,
  titulo,
  descricao,
}: Video): Promise<Video> => {
  const response = await api.put<Video>(`${URL_VIDEOS}/${id}`, {
    categoriaId,
    categoria,
    url,
    titulo,
    descricao,
  });
  return response.data;
};

const exclude = async (id: number): Promise<void> => {
  await api.delete(`${URL_VIDEOS}/${id}`);
};

export default {
  getAll,
  create,
  update,
  exclude,
};
