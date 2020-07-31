import styled, { css } from 'styled-components';

interface ListItemProps {
  cor: string;
}

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
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
export const ListItemButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: o;

  &:hover {
    opacity: 0.8;
  }
`;
