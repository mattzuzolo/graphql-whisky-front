import styled from 'styled-components';
import colors from '../../../styles/colors';

type Props = {
  name: string;
};

const H1 = styled.h1`
  margin: 0;
  padding: 0;
`;

const PageTitle = ({ name }: Props): JSX.Element => {
  return <H1>{name}</H1>;
};

export default PageTitle;
