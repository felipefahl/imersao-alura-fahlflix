import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';
import categoriasRepository, { Category } from '../../repositories/categorias';

const Home: React.FC = () => {
  const [categorias, setCategorias] = useState<Category[]>([]);

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then(response => setCategorias(response));
  }, []);

  return (
    <PageDefault paddingAll>
      {categorias.length === 0 && <div>Loading...</div>}

      {categorias.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={categorias[0].videos[0].titulo}
                url={categorias[0].videos[0].url}
                videoDescription={categorias[0].videos[0].descricao}
              />
              <Carousel ignoreFirstVideo category={categorias[0]} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
};

export default Home;
