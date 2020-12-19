import styled from 'styled-components';
import NextLink from 'next/link';
import { ReactNode } from 'react';
import colors from 'styles/colors';

const StyledLink = styled.a`
  margin-right: 30px;
  text-decoration: none;
  color: ${colors.grayscale.white};
  &:hover {
    text-decoration: underline;
  }
`;

type NavLinkProps = {
  href: string;
  children: ReactNode;
};
const NavLink = ({ href, children }: NavLinkProps): JSX.Element => {
  return (
    <NextLink href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
};

export default NavLink;
