import React from 'react';
import styled from 'styled-components';

import GUIDELINE from '../../constants';

import support from '../../images/subheader/support.png';
import support_2x from '../../images/subheader/support_2x.png';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 46px;
  height: ${(GUIDELINE.header_height + 2)}px;
  line-height: ${(GUIDELINE.header_height + 2)}px;

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    height: ${GUIDELINE.header_height_mobile}px;
    line-height: ${GUIDELINE.header_height_mobile}px;
  }
`
const Element = styled.a`
  box-sizing: content-box;
  display: inline-block;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid ${GUIDELINE.color_white};
  background: url(${support}) ${GUIDELINE.color_blue_gray_light} 50% 50% no-repeat;
  transition: all ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};

  &:hover {
    background-color: ${GUIDELINE.color_blue};
    border-color: ${GUIDELINE.color_blue};
  }

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${support_2x}) ${GUIDELINE.color_blue_gray_light} 50% 50% no-repeat;
    background-size: 20px 20px;
  }
`

const Support = () => (
  <Wrapper>
    <Element href="#" />
  </Wrapper>
);

export default Support;
