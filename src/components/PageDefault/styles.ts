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
  }
  ${props =>
    props.paddingAll &&
    css`
      padding: 0;
    `}
`;
