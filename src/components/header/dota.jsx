import React from 'react';
import styled from 'styled-components';

import GUIDELINE from '../../constants';

import dota from '../../images/header/dota.jpg';
import dota_2x from '../../images/header/dota_2x.jpg';
import dota_hover from '../../images/header/dota_hover.jpg';
import dota_hover_2x from '../../images/header/dota_hover_2x.jpg';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 90px;
  height: ${GUIDELINE.header_height}px;
  z-index: ${GUIDELINE.layout_front};
`
const Element = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  background: url(${dota}) 50% 50% no-repeat;
  transition: background ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${dota_2x}) 50% 50% no-repeat;
    background-size: cover;
  }

  &:hover {
    background: url(${dota_hover}) 50% 50% no-repeat;

    @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
      only screen and (-moz-min-device-pixel-ratio: 1.5),
      only screen and (-o-min-device-pixel-ratio: 3/2),
      only screen and (min-device-pixel-ratio: 1.5) {
      background: url(${dota_hover_2x}) 50% 50% no-repeat;
      background-size: cover;
    }
  }
`

const Dota = () => (
  <Wrapper>
    <Element href="#" />
  </Wrapper>
);

export default Dota;
