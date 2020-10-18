import styled from 'styled-components';
import colors from '../../../styles/colors';

type Props = {
  description: string;
};

const H2 = styled.h2`
  color: ${colors.grayscale.gray};
`;

const Description = ({ description }: Props): JSX.Element => {
  return <H2>{description}</H2>;
};

export default Description;
