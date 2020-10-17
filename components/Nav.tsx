import styled from 'styled-components';
import Link from 'components/Link';
import colors from 'styles/colors';

const Wrapper = styled.div`
  display: flex;
  font-size: 26px;

  padding: 20px;
  background-color: ${colors.primary};
  border-bottom: 1px solid ${colors.primary};

  display: flex;
  justify-content: space-between;

  padding-left: 12.5vh;
  padding-right: 12.5vh;
`;

const LeftWrapper = styled.div``;

const RightWrapper = styled.div``;

const Nav = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
      </LeftWrapper>
      <RightWrapper>
        <Link href="/#">Login</Link>
        <Link href="/#">Sign up</Link>
      </RightWrapper>
    </Wrapper>
  );
};

export default Nav;
