import api from '../services/api';

const URL_VIDEOS = `/videos`;

export interface Video {
  id?: number;
  categoriaId?: number;
  url: string;
  titulo: string;
}

const create = async (objetoDoVideo: Video): Promise<Video> => {
  const response = await api.post<Video>(`${URL_VIDEOS}`, {
    ...objetoDoVideo,
  });
  return response.data;
};

export default {
  create,
};
