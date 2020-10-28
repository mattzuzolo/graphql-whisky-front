import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

type Props = {
  children: ReactNode;
};

// Hides stuff on mobile only
const HeaderWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HeaderWrapper;
