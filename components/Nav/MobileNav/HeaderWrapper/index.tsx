import { ReactNode } from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.grayscale.white};
`;

type Props = {
  children: ReactNode;
};

// Hides stuff on mobile only
const HeaderWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HeaderWrapper;
