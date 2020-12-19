import styled from 'styled-components';

import colors from 'styles/colors';

const StyledButton = styled.button`
  /* Override default button styles */
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;

  color: ${colors.grayscale.white};
  font-size: 42px;
  margin-left: 16px;
`;

type Props = {
  onClick: () => void;
};

const Hamburger = ({ onClick }: Props) => {
  return <StyledButton onClick={onClick}>=</StyledButton>;
};

export default Hamburger;
