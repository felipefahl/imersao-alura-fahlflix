import React, { AnchorHTMLAttributes } from 'react';

import { ButtonLink } from './styles';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: string;
};

const Button: React.FC<ButtonLinkProps> = ({ children, href }) => {
  return <ButtonLink href={href}>{children}</ButtonLink>;
};

export default Button;
