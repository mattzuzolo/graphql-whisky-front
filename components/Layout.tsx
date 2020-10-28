import { ReactNode } from 'react';
import styled from 'styled-components';

import Nav from 'components/Nav';
import Breakpoints from '../styles/breakpoints';

type Props = {
  children: ReactNode;
};

const Page = styled.div`
  margin-left: 18%;
  margin-right: 18%;
  margin-bottom: 5vh;

  @media (max-width: ${Breakpoints.tablet}px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    margin-left: 7.5px;
    margin-right: 7.5px;
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
