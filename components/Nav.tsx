import { ReactNode } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import Link from 'components/Link';
import colors from 'styles/colors';

const Wrapper = styled.div`
  font-size: 26px;

  padding: 20px;
  border-bottom: 2.5px solid ${colors.primary};
  background: rgb(255, 102, 0);
  background: linear-gradient(
    309deg,
    rgba(255, 102, 0, 1) 10%,
    rgba(255, 112, 16, 1) 100%
  );
  display: flex;
  justify-content: space-between;

  padding-left: 12.5vh;
  padding-right: 12.5vh;
  margin-bottom: 50px;
`;

const LeftWrapper = styled.div``;

const RightWrapper = styled.div``;

const Nav = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/explore">Explore</NavLink>
      </LeftWrapper>
      <RightWrapper>
        <NavLink href="/#">Login</NavLink>
        <NavLink href="/#">Sign up</NavLink>
      </RightWrapper>
    </Wrapper>
  );
};

const StyledLink = styled.a`
  margin-right: 30px;
  text-decoration: none;
  color: white;
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

export default Nav;
