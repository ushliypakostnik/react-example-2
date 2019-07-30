import React from 'react';
import styled from 'styled-components';

import GUIDELINE from '../../constants';

import Container from '../utils/container';
import Logo from './logo';
import Dota from './dota';
import Banner from './banner';
import Right from './right';

const Wrapper = styled.div`
  position: relative;
  background: ${GUIDELINE.color_white};
  height: ${GUIDELINE.header_height}px;

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    height: ${GUIDELINE.header_height_mobile}px;
  }
`
const AdaptiveWrapper = styled.span`
  @media (max-width: ${GUIDELINE.breackpoint_sm_max}) {
    display: none;
  }
`
const Divider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 1px;
  background: ${GUIDELINE.color_border};
  z-index: ${GUIDELINE.layout_back};
`

const Header = () => (
  <Wrapper>
    <Container>
      <Logo /><AdaptiveWrapper><Dota
      /><Banner
          color={ `${GUIDELINE.color_blue_light}` }
          textLarge="Бoнусы"
          textSmall="Ежедневные раздачи"
      /><Banner
          color={ `${GUIDELINE.color_blue}` }
          textLarge="Интуиция"
          textSmall="Угадывай события" />
      </AdaptiveWrapper>
      <Right />
    </Container>
    <Divider />
  </Wrapper>
);

export default Header;
