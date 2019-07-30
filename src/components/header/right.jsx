import React from 'react';
import styled from 'styled-components';

import GUIDELINE from '../../constants';

import Button from '../utils/button';
import IconButton from '../utils/iconbutton';
import Ava from '../utils/ava';

import icon from '../../images/header/btn-1.png';
import icon_2x from '../../images/header/btn-1_2x.png';
import plus from '../../images/pieces/plus.png';
import plus_2x from '../../images/pieces/plus_2x.png';
import open from '../../images/header/open.png';
import open_2x from '../../images/header/open_2x.png';

const Wrapper = styled.div`
  width: 473px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  float: right;
  padding-top: 2px;
  height: ${GUIDELINE.header_height}px;

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    width: calc(100vmin - 90px);
    max-width: 65vmin;
    padding-top: 0;
    height: ${GUIDELINE.header_height_mobile}px;
  }

  .sc-fjdhpX {
    @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
      display: none;
    }
  }

  .sc-kAzzGY {
    @media (min-width: ${GUIDELINE.breackpoint_sm}) {
      display: none;
    }
  }
`
const Icon = styled.div`
  position: absolute;
  left: 20px;
  top: 13px;
  width: 17px;
  height: 17px;
  color:  ${GUIDELINE.color_white};
  background: url(${icon}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${icon_2x}) 50% 50% no-repeat;
    background-size: cover;
  }

  .sc-kAzzGY & {
    @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
      position: static;
      display: inline-block;
      vertical-aling: middle;
    }
  }
`
const User = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: row;
  padding-top: 3px;

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    min-width: auto;
  }
`
const Userinfo = styled.div`
  margin-left: 17px;

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    display: none;
  }
`
const Username = styled.div`
  color:  ${GUIDELINE.color_blue_darks};
  font-family: ${GUIDELINE.fontfamily_sans};
  letter-spacing: ${GUIDELINE.letterspacing_normal};
  font-size:  ${GUIDELINE.fontsize_normal}px;
  font-weight: ${GUIDELINE.fontweight_sans_bold};
  line-height:  ${GUIDELINE.lineheight_normal}px;
`
const Userprice = styled.div`
  color: ${GUIDELINE.color_success};
  font-family: ${GUIDELINE.fontfamily_sans};
  letter-spacing: ${GUIDELINE.letterspacing_normal};
  font-size:  ${GUIDELINE.fontsize_medium}px;
  font-weight: ${GUIDELINE.fontweight_sans_regular};
  line-height:  ${GUIDELINE.lineheight_medium}px;
`
const Deposit = styled.a`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: url(${plus}) 50% 50% no-repeat;
  background-color: ${GUIDELINE.color_success};

  &:hover {
    background-color: ${GUIDELINE.color_green_light};
  }

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${plus_2x}) 50% 50% no-repeat;
    background-color: ${GUIDELINE.color_success};
    background-size: 12px 12px;

    &:hover {
      background-color: ${GUIDELINE.color_green_light};
    }
  }
`
const Open = styled.a`
  display: inline-block;
  width: 21px;
  height: 9px;
  background: url(${open}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${open_2x}) 50% 50% no-repeat;
    background-size: 21px 9px;
  }
`

const Right = () => (
  <Wrapper>
    <Button
      text="Мои ставки"
      color={ `${GUIDELINE.color_white}` }
      background={ `${GUIDELINE.color_blue_gray}` }
      ><Icon />
    </Button>
    <IconButton
      color={ `${GUIDELINE.color_white}` }
      background={ `${GUIDELINE.color_blue_gray}` }
      ><Icon />
    </IconButton>
    <User>
      <Ava />
      <Userinfo>
        <Username>Виктор Павлов</Username>
        <Userprice>8 608.50 P</Userprice>
      </Userinfo>
    </User>
    <Deposit href="#" />
    <Open href="#" />
  </Wrapper>
);

export default Right;
