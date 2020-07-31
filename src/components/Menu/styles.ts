import styled from 'styled-components';

export const Header = styled.nav`
  .Logo {
    max-width: 168px;
  }
  @media (max-width: 800px) {
    .Logo {
      max-width: 105px;
    }
  }
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--primary);

  span {
    color: var(--white);
    font-size: 30px;
    @media (max-width: 800px) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }

  @media (max-width: 800px) {
    a.ButtonLink {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
  }
`;
