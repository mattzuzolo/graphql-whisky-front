import Link from 'components/Link';
import styled from 'styled-components';
import colors from '../../../../styles/colors';

const StyledDiv = styled.div`
  border: 2px solid ${colors.grayscale.lightGray};
  border-left: 5px solid ${colors.primary};
  border-radius: 5px;

  &:hover {
    border-color: ${colors.primary};
  }

  padding: 12px;
  margin-bottom: 20px;
`;

const StyledH3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 22px;
  margin-bottom: 4px;
`;

const DetailWrapper = styled.div`
  color: ${colors.grayscale.black};
`;

type Props = {
  key: string;
  label: string;
  whiskyHref: string;
  whiskyName: string;
  distillerName: string;
};

const ListItem = ({
  whiskyHref,
  whiskyName,
  label,
  distillerName,
}: Props): JSX.Element => {
  return (
    <Link href={whiskyHref}>
      <StyledDiv>
        <StyledH3>{whiskyName}</StyledH3>
        <DetailWrapper>
          {label} by {distillerName}
        </DetailWrapper>
      </StyledDiv>
    </Link>
  );
};

export default ListItem;
