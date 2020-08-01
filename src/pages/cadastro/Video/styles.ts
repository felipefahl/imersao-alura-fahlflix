import styled, { css } from 'styled-components';

interface ListItemProps {
  cor: string;
}

export const MessageContainer = styled.div`
  text-align: center;

  span {
    width: 500px;
    position: fixed;
    z-index: 10;
    top: 100px;
    left: 50%;
    margin-left: -250px;
    font-size: 20px;
    color: #000;
    background: #99ff00;
    border-radius: 5px;
    padding: 5px;
    @media (max-width: 800px) {
      top: 50px;
      width: 300px;
      margin-left: -150px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const List = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ListItem = styled.li<ListItemProps>`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }
  p + strong {
    margin-top: 32px;
  }

  p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }
  span {
    ${props =>
      props.cor &&
      css`
        background: ${props.cor};
        color: ${props.cor};
      `}
  }
`;

export const ListItemCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    height: 100px;
    width: 150px;
    position: absolute;
    right: 24px;
    bottom: 24px;
  }
`;

export const ListItemButtonContainer = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
`;

export const ListItemButton = styled.button`
  border: o;

  & + button {
    margin-left: 5px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
