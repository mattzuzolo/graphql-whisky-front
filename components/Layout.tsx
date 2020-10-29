import { ReactNode } from 'react';
import styled from 'styled-components';

import Nav from 'components/Nav';
import Breakpoints from '../styles/breakpoints';

type Props = {
  children: ReactNode;
};

const Page = styled.div`
  margin-left: 15vh;
  margin-right: 15vh;
  margin-bottom: 5vh;

  @media (max-width: ${Breakpoints.laptop}px) {
    margin-left: 5vh;
    margin-right: 5vh;
    margin-bottom: 100px;
  }

  @media (max-width: ${Breakpoints.tablet}px) {
    margin-left: 150px;
    margin-right: 150px;
    margin-bottom: 100px;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 100px;
  }
`;

function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <Page>{children}</Page>
    </>
  );
}

export default Layout;
