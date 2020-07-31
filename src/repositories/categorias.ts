import api from '../services/api';

const URL_CATEGORIES = `/categorias`;

interface CategoryVideos {
  id: number;
  categoriaId: number;
  url: string;
  titulo: string;
  descricao: string;
}

interface CategoryLinkExtra {
  url: string;
  text: string;
}

export interface Category {
  id?: number;
  titulo: string;
  descricao: string;
  cor: string;
  link_extra: CategoryLinkExtra;
  videos: CategoryVideos[];
}

interface CreateCategory {
  titulo: string;
  descricao: string;
  cor: string;
}

const getAll = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>(`${URL_CATEGORIES}`);
  return response.data;
};

const getAllWithVideos = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>(`${URL_CATEGORIES}?_embed=videos`);
  return response.data;
};

const create = async ({
  titulo,
  cor,
  descricao,
}: CreateCategory): Promise<Category> => {
  const response = await api.post<Category>(`${URL_CATEGORIES}`, {
    titulo,
    cor,
    descricao,
  });
  return response.data;
};

const exclude = async (id: number): Promise<void> => {
  await api.delete(`${URL_CATEGORIES}/${id}`);
};

export default {
  getAllWithVideos,
  getAll,
  create,
  exclude,
};
