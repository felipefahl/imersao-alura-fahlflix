import styled, { css } from 'styled-components';

export interface MainProps {
  paddingAll?: boolean;
}

export const Main = styled.main<MainProps>`
  flex: 1;
  background-color: var(--black);
  color: var(--white);
  margin-top: 94px;
  padding: 50px 5%;

  @media (max-width: 800px) {
    margin-top: 40px;
    form {
      button,
      a {
        width: 100%;
        margin: 5px;
        padding: 10px;
        text-align: center;
      }
    }
  }
  ${props =>
    props.paddingAll &&
    css`
      padding: 0;
    `}
`;
