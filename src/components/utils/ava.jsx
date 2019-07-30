import React from 'react';
import styled from 'styled-components';

import ava from '../../images/mocks/ava.jpg';
import ava_badge from '../../images/pieces/ava-badge.png';
import ava_badge_2x from '../../images/pieces/ava-badge_2x.png';

const Wrapper = styled.a`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: url(${ava}) 50% 50% no-repeat;
  background-size: cover;
`
const Badge = styled.div`
  position: absolute;
  top: -5px;
  right: -8px;
  width: 15px;
  height: 15px;
  background: url(${ava_badge}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${ava_badge_2x}) 50% 50% no-repeat;
    background-size: cover;
  }
`

const Ava = () => (
  <Wrapper>
    <Badge />
  </Wrapper>
);

export default Ava;
