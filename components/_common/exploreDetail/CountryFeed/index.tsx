import styled from 'styled-components';
import { ReactNode } from 'react';
import Breakpoints from 'styles/breakpoints';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${Breakpoints.tablet + 2}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: ${Breakpoints.phone}px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

type Props = {
  children: ReactNode;
};

const CountryFeed = ({ children }: Props): JSX.Element => {
  return <Wrapper>{children}</Wrapper>;
};

export default CountryFeed;
