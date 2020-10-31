import { ChangeEvent } from 'react';
import Distiller from '_types/Distiller';
import CountryPage from 'pages/[countryAlias]';
import styled from 'styled-components';
import Region from '_types/Country';

type Props = {
  items: string[];
  category: 'distiller' | 'region';
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

const StyledSelect = styled.select`
  display: flex;
  flex-basis: 33%;

  font-size: 22px;
  height: 36px;
`;

const Select = ({ items, category, onChange, value }: Props): JSX.Element => {
  return (
    <StyledSelect
      onChange={onChange}
      name="distiller"
      id="distiller-select"
      value={value}
    >
      <option value="">--Filter by {category} --</option>
      {items.map((name: string) => {
        return <option value={name}>{name}</option>;
      })}
    </StyledSelect>
  );
};

export default Select;
