import styled from 'styled-components';

import signUpBackgroundImg from '../../assets/images/404_errorpage.jpg';

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
  cursor: pointer;
`;

export const NotFoundError = styled.div`
  height: 50px;
  background-color: var(--black);
  color: var(--white);

  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 20px;

    img {
      margin-top: 3px;
      height: 20px;
    }
  }
`;
