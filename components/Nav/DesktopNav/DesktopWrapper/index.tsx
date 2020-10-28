import { ReactNode } from 'react';
import styled from 'styled-components';
import Breakpoints from 'styles/breakpoints';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${Breakpoints.tablet}px) {
    display: none;
  }
`;

type Props = {
  children: ReactNode;
};

// Hides stuff on desktop only
const DesktopWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default DesktopWrapper;
