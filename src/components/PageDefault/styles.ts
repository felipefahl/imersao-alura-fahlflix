import styled from 'styled-components';

export const Main = styled.main`
  flex: 1;
  background-color: var(--black);
  color: var(--white);
  margin-top: 94px;
  padding: 50px 5%;

  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;
