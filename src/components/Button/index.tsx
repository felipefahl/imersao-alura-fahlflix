import styled from 'styled-components';

const Button = styled.button`
  color: var(--white);
  background: var(--primary);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;

  & + button {
    margin-left: 10px;
  }

  & + a {
    margin-left: 10px;
  }

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Button;
