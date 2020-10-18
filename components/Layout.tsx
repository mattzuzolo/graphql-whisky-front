import { ReactNode } from 'react';
import styled from 'styled-components';

import Nav from 'components/Nav';

type Props = {
  children: ReactNode;
};

const Page = styled.div`
  margin-left: 17.5vh;
  margin-right: 17.5vh;

  margin-bottom: 5vh;
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
