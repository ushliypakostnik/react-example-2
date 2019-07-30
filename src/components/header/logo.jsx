import React from 'react';
import styled from 'styled-components';

import GUIDELINE from '../../constants';

import logo from '../../images/header/logo.png';
import logo_2x from '../../images/header/logo_2x.png';
import logo_mobile from '../../images/header/logo_mobile.png';
import logo_mobile_2x from '../../images/header/logo_mobile_2x.png';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 231px;
  padding-top: 27px;
  height: calc(${GUIDELINE.header_height}px - 27px);

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    width: 50px;
    padding-top: 15px;
    height: calc(${GUIDELINE.header_height_mobile}px - 15px);
  }
`
const Element = styled.a`
  display: inline-block;
  width: 193px;
  height: 40px;
  background: url(${logo}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${logo_2x}) 50% 50% no-repeat;
    background-size: cover;
  }

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    width: 40px;
    background: url(${logo_mobile}) 50% 50% no-repeat;
  }

  @media only screen and (max-width: ${GUIDELINE.breackpoint_xs_max})
    and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${logo_mobile_2x}) 50% 50% no-repeat;
    background-size: cover;
  }
`
const Logo = () => (
  <Wrapper>
    <Element as="a" href="#" />
  </Wrapper>
);

export default Logo;
