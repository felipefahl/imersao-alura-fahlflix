import React from 'react';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';
import { Category } from '../../components/Carousel/index';
import PageDefault from '../../components/PageDefault';

const Home: React.FC = () => {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        videoDescription="O que é frontend?"
        url={dadosIniciais.categorias[0].videos[0].url}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0] as Category}
      />

      <Carousel category={dadosIniciais.categorias[1] as Category} />

      <Carousel category={dadosIniciais.categorias[2] as Category} />

      <Carousel category={dadosIniciais.categorias[3] as Category} />

      <Carousel category={dadosIniciais.categorias[4] as Category} />

      <Carousel category={dadosIniciais.categorias[5] as Category} />
    </PageDefault>
  );
};

export default Home;
