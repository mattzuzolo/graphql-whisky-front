import NextLink from 'next/link';
import { ReactNode } from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';

type Props = {
  href: string;
  children: ReactNode;
};

const StyledLink = styled.a`
  margin-right: 30px;
  text-decoration: none;
  color: #f16000;

  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({ href, children }: Props): JSX.Element => {
  return (
    <NextLink href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;
