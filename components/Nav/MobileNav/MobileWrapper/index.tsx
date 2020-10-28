import { ReactNode } from 'react';
import styled from 'styled-components';
import Breakpoints from 'styles/breakpoints';

const Wrapper = styled.div`
  @media (min-width: ${Breakpoints.tablet}px) {
    display: none;
  }
`;

type Props = {
  children: ReactNode;
};

// Hides stuff on mobile only
const MobileWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MobileWrapper;
