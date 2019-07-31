import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GUIDELINE from '../../constants';

import icon1 from '../../images/header/banner-1.png';
import icon1_2x from '../../images/header/banner-1_2x.png';
import icon2 from '../../images/header/banner-2.png';
import icon2_2x from '../../images/header/banner-2_2x.png';

const Hover = styled.div`
  opacity: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background:  ${props => props.background};
  transition: opacity ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};
`
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding-top: 26px;
  padding-left: 91px;
  padding-right: 23px;
  border-right: 1px solid ${GUIDELINE.color_border};
  height: calc(${GUIDELINE.header_height}px - 27px);

  &:hover {
    ${Hover} {
      opacity: 1;
    }
  }

  @media (max-width: ${GUIDELINE.breackpoint_lg_max}) {
    padding: 0;
    height: ${GUIDELINE.header_height}px;
    line-height: ${GUIDELINE.header_height}px;
    width: 90px;
    text-align: center;
  }
`
const Element = styled.div`
  position: relative;

  @media (max-width: ${GUIDELINE.breackpoint_lg_max}) {
    display: inline-block;
    vertical-align: middle;
  }
`
const IconWrapper = styled.div`
  position: absolute;
  top: -2px;
  left: -57px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background:  ${props => props.background};

  @media (max-width: ${GUIDELINE.breackpoint_lg_max}) {
    position: relative;
    top: 0;
    left: 0;
  }
`
const Icon = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`
const Icon1 = styled(Icon)`
  background: url(${icon1}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${icon1_2x}) 50% 50% no-repeat;
    background-size: 23px 23px;
  }
`
const Icon2 = styled(Icon)`
  background: url(${icon2}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${icon2_2x}) 50% 50% no-repeat;
    background-size: 26px 29px;
  }
`
const Text = styled.div`
  color: ${props => props.color};
  font-family: ${GUIDELINE.fontfamily_sans};
  letter-spacing: ${GUIDELINE.letterspacing_normal};
  white-space: nowrap;

  @media (max-width: ${GUIDELINE.breackpoint_lg_max}) {
    display: none;
  }
`
const TextLarge = styled(Text)`
  font-size:  ${GUIDELINE.fontsize_normal}px;
  font-weight: ${GUIDELINE.fontweight_sans_bold};
  line-height:  ${GUIDELINE.lineheight_normal}px;
`
const lineHeight = GUIDELINE.lineheight_small * 0.8;
const TextSmall = styled(Text)`
  font-size:  ${GUIDELINE.fontsize_small}px;
  font-weight: ${GUIDELINE.fontweight_sans_regular};
  line-height:  ${lineHeight}px;
`

const Logo = ({color, textLarge, textSmall}) => (
  <Wrapper>
    <Element as="a" href="#">
      <IconWrapper background={ color }>
        { color === GUIDELINE.color_blue_light && <Icon1 /> }
        { color === GUIDELINE.color_blue && <Icon2 /> }
      </IconWrapper>
      <TextLarge color={ color }>{ textLarge }</TextLarge>
      <TextSmall color={ color }>{ textSmall }</TextSmall>
    </Element>
    <Hover background={ color } />
  </Wrapper>
);

Logo.propTypes = {
  color: PropTypes.string.isRequired,
  textLarge: PropTypes.string.isRequired,
  textSmall: PropTypes.string.isRequired,
};

export default Logo;
