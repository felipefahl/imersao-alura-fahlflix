import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

import { Main, MainProps } from './styles';

const PageDefault: React.FC<MainProps> = ({ paddingAll, children }) => {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
