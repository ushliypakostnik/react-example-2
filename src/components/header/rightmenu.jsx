import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GUIDELINE from '../../constants';

import icon1 from '../../images/header/rightmenu/icon-01.png';
import icon1_2x from '../../images/header/rightmenu/icon-01_2x.png';
import icon1_hover from '../../images/header/rightmenu/icon-01_hover.png';
import icon1_hover_2x from '../../images/header/rightmenu/icon-01_hover_2x.png';
import icon2 from '../../images/header/rightmenu/icon-02.png';
import icon2_2x from '../../images/header/rightmenu/icon-02_2x.png';
import icon2_hover from '../../images/header/rightmenu/icon-02_hover.png';
import icon2_hover_2x from '../../images/header/rightmenu/icon-02_hover_2x.png';
import icon3 from '../../images/header/rightmenu/icon-03.png';
import icon3_2x from '../../images/header/rightmenu/icon-03_2x.png';
import icon3_hover from '../../images/header/rightmenu/icon-03_hover.png';
import icon3_hover_2x from '../../images/header/rightmenu/icon-03_hover_2x.png';
import icon4 from '../../images/header/rightmenu/icon-04.png';
import icon4_2x from '../../images/header/rightmenu/icon-04_2x.png';
import icon4_hover from '../../images/header/rightmenu/icon-04_hover.png';
import icon4_hover_2x from '../../images/header/rightmenu/icon-04_hover_2x.png';
import icon5 from '../../images/header/rightmenu/icon-05.png';
import icon5_2x from '../../images/header/rightmenu/icon-05_2x.png';
import icon5_hover from '../../images/header/rightmenu/icon-05_hover.png';
import icon5_hover_2x from '../../images/header/rightmenu/icon-05_hover_2x.png';
import icon6 from '../../images/header/rightmenu/icon-06.png';
import icon6_2x from '../../images/header/rightmenu/icon-06_2x.png';
import icon6_hover from '../../images/header/rightmenu/icon-06_hover.png';
import icon6_hover_2x from '../../images/header/rightmenu/icon-06_hover_2x.png';
import icon7 from '../../images/header/rightmenu/icon-07.png';
import icon7_2x from '../../images/header/rightmenu/icon-07_2x.png';
import icon7_hover from '../../images/header/rightmenu/icon-07_hover.png';
import icon7_hover_2x from '../../images/header/rightmenu/icon-07_hover_2x.png';

const Wrapper = styled.ul`
  width: 240px;

  .dropdown-in-header-right & {
    position: absolute;
    right: -20px;
    top: 0;
    border-radius: 0;
    padding: 0;
    box-shadow: 0 35px 100px -10px rgba(0, 0, 0, 0.25);
  }
`
const Active = styled.a`
  position: relative;
  display: block;
  padding-left: 56px;
  padding-top: 15px;
  padding-bottom: 14px;
  color: ${GUIDELINE.color_text};
  font-family: ${GUIDELINE.fontfamily_sans};
  letter-spacing: ${GUIDELINE.letterspacing_normal};
  font-size:  ${GUIDELINE.fontsize_msmall}px;
  font-weight: ${GUIDELINE.fontweight_sans_regular};
  line-height:  ${GUIDELINE.lineheight_msmall}px;
  white-space: nowrap;
`
const Icon = styled.div`
  position: absolute;
  left: 20px;
  top: 15px;
  width: 21px;
  height: 21px;
  transition: background ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};
`
const Icon1 = styled(Icon)`
  background: url(${icon1}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${icon1_2x}) 50% 50% no-repeat;
    background-size: contain;
  }
`
const Icon2 = styled(Icon)`
  background: url(${icon2}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${icon2_2x}) 50% 50% no-repeat;
    background-size: contain;
  }
`
const Icon3 = styled(Icon)`
  background: url(${icon3}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${icon3_2x}) 50% 50% no-repeat;
    background-size: contain;
  }
`
const Icon4 = styled(Icon)`
  background: url(${icon4}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${icon4_2x}) 50% 50% no-repeat;
    background-size: contain;
  }
`
const Icon5 = styled(Icon)`
  background: url(${icon5}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${icon5_2x}) 50% 50% no-repeat;
    background-size: contain;
  }
`
const Icon6 = styled(Icon)`
  background: url(${icon6}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${icon6_2x}) 50% 50% no-repeat;
    background-size: contain;
  }
`
const Icon7 = styled(Icon)`
  top: 20px;
  left: 35px;
  background: url(${icon7}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${icon7_2x}) 50% 50% no-repeat;
    background-size: contain;
  }
`
const Item = styled.li`
  padding: 0;
  background: ${GUIDELINE.color_white};
  border-left: 2px solid ${GUIDELINE.color_white};
  transition: border ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};

  &:not(:last-child) {
    border-bottom: 1px solid ${GUIDELINE.color_border};
  }

  &:last-child {
    background: ${GUIDELINE.color_gray_light};
    border-bottom: 1px solid ${GUIDELINE.color_gray_light};
    transition: all ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};

    ${Active} {
      padding-left: 65px;
      padding-top: 20px;
      padding-bottom: 19px;
    }
  }

  &:hover {
    border-left: 2px solid ${GUIDELINE.color_blue_02};

    ${Icon1} {
      background: url(${icon1_hover}) 50% 50% no-repeat;

      @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
        only screen and (-moz-min-device-pixel-ratio: 1.5),
        only screen and (-o-min-device-pixel-ratio: 3/2),
        only screen and (min-device-pixel-ratio: 1.5) {
        background: url(${icon1_hover_2x}) 50% 50% no-repeat;
        background-size: contain;
      }
    }

    ${Icon2} {
      background: url(${icon2_hover}) 50% 50% no-repeat;

      @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
        only screen and (-moz-min-device-pixel-ratio: 1.5),
        only screen and (-o-min-device-pixel-ratio: 3/2),
        only screen and (min-device-pixel-ratio: 1.5) {
        background: url(${icon2_hover_2x}) 50% 50% no-repeat;
        background-size: contain;
      }
    }

    ${Icon3} {
      background: url(${icon3_hover}) 50% 50% no-repeat;

      @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
        only screen and (-moz-min-device-pixel-ratio: 1.5),
        only screen and (-o-min-device-pixel-ratio: 3/2),
        only screen and (min-device-pixel-ratio: 1.5) {
        background: url(${icon3_hover_2x}) 50% 50% no-repeat;
        background-size: contain;
      }
    }

    ${Icon4} {
      background: url(${icon4_hover}) 50% 50% no-repeat;

      @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
        only screen and (-moz-min-device-pixel-ratio: 1.5),
        only screen and (-o-min-device-pixel-ratio: 3/2),
        only screen and (min-device-pixel-ratio: 1.5) {
        background: url(${icon4_hover_2x}) 50% 50% no-repeat;
        background-size: contain;
      }
    }

    ${Icon5} {
      background: url(${icon5_hover}) 50% 50% no-repeat;

      @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
        only screen and (-moz-min-device-pixel-ratio: 1.5),
        only screen and (-o-min-device-pixel-ratio: 3/2),
        only screen and (min-device-pixel-ratio: 1.5) {
        background: url(${icon5_hover_2x}) 50% 50% no-repeat;
        background-size: contain;
      }
    }

    ${Icon6} {
      background: url(${icon6_hover}) 50% 50% no-repeat;

      @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
        only screen and (-moz-min-device-pixel-ratio: 1.5),
        only screen and (-o-min-device-pixel-ratio: 3/2),
        only screen and (min-device-pixel-ratio: 1.5) {
        background: url(${icon6_hover_2x}) 50% 50% no-repeat;
        background-size: contain;
      }
    }

    ${Icon7} {
      background: url(${icon7_hover}) 50% 50% no-repeat;

      @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
        only screen and (-moz-min-device-pixel-ratio: 1.5),
        only screen and (-o-min-device-pixel-ratio: 3/2),
        only screen and (min-device-pixel-ratio: 1.5) {
        background: url(${icon7_hover_2x}) 50% 50% no-repeat;
        background-size: contain;
      }
    }

    &:last-child {
      background: ${GUIDELINE.color_dark};
      border-bottom: 1px solid ${GUIDELINE.color_dark};
      border-left: 2px solid ${GUIDELINE.color_dark};

      ${Active} {
        color: ${GUIDELINE.color_white};
      }
    }
  }
`

export const RightMenuItem = ({ id, text }) => (
  <Item>
    <Active // eslint-disable-line jsx-a11y/anchor-is-valid
      href="#">
      { id === 0 && <Icon1 /> }
      { id === 1 && <Icon2 /> }
      { id === 2 && <Icon3 /> }
      { id === 3 && <Icon4 /> }
      { id === 4 && <Icon5 /> }
      { id === 5 && <Icon6 /> }
      { id === 6 && <Icon7 /> }
      <span>{text}</span>
    </Active>
  </Item>
);

const RightMenu = ({ items }) => (
  <nav role="navigation">
    <Wrapper>
      { items.map((item, index) => {
        return <RightMenuItem
          key={ index }
          id={ index }
          text={ item }
        />
      })}
    </Wrapper>
  </nav>
);

RightMenuItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

RightMenu.propTypes = {
  items: PropTypes.array.isRequired,
};

export default RightMenu;
