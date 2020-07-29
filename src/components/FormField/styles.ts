import styled from 'styled-components';

interface InputProps {
  hasValue?: boolean;
}

export const Input = styled.input<InputProps>`
  &:hover,
  &:focus {
    border-bottom-color: red;
  }
`;

export const TextArea = styled.textarea<InputProps>`
  &:hover,
  &:focus {
    border-bottom-color: red;
  }
`;
