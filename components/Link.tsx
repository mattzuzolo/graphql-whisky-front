import NextLink from 'next/link';
import { ReactNode } from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';

type Props = {
  href: string;
  children: ReactNode;
};

const StyledLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: #fafafa;

  &:hover {
    text-decoration: underline;
    color: #fafafa;
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
