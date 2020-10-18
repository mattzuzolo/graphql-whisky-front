import NextLink from 'next/link';
import { ReactNode } from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';
import Link from 'components/Link';

import Title from './Title';
import WhiskyRecommendation from './WhiskyRecommendation';

import Whisky from '_types/Whisky';

type Props = {
  distillerId: string;
  distillerName: string;
  distillerRegion?: string;
  distillerCountry: string;
  whiskys: Whisky[];
};

const MoreWhisky = ({
  distillerId,
  distillerName,
  distillerRegion,
  distillerCountry,
  whiskys,
}: Props): JSX.Element => {
  return (
    <>
      <Title
        distillerHref={`/distilleries/${distillerId}`}
        distillerName={distillerName}
      />
      {whiskys.map((whisky: any) => (
        <WhiskyRecommendation
          key={whisky.id}
          whiskyHref={`/whiskies/${whisky.id}`}
          whiskyName={whisky.name}
          blended={whisky.blended}
          style={whisky.blended ? 'Blended' : 'Single Malt'}
          distillerRegion={distillerRegion}
          distillerCountry={distillerCountry}
        />
      ))}
    </>
  );
};

export default MoreWhisky;
