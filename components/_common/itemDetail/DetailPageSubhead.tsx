import styled from 'styled-components';
import colors from 'styles/colors';

type Props = {
  description: string;
};

const H2 = styled.h2`
  color: ${colors.grayscale.gray};

  /* Reset base styles on h2 */
  margin: 0;
  padding: 0;

  margin-top: 4px;
  margin-bottom: 20px;
`;

const StyleDescription = ({ description }: Props): JSX.Element => {
  return <H2>{description ? description : 'Whisky'}</H2>;
};

export default StyleDescription;
