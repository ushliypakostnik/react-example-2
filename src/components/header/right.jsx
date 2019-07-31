import React, { Component } from 'react';
import styled from 'styled-components';

import { Dropdown } from 'antd';
import '../../libraries/dropdown.css';

import { Drawer } from 'antd';
import '../../libraries/drawer.css';

import GUIDELINE from '../../constants';
import { rightMenuContent } from '../../config';

import Button from '../utils/button';
import IconButton from '../utils/iconbutton';
import Ava from '../utils/ava';
import RightMenu from './rightmenu';

import icon from '../../images/header/btn-1.png';
import icon_2x from '../../images/header/btn-1_2x.png';
import plus from '../../images/pieces/plus.png';
import plus_2x from '../../images/pieces/plus_2x.png';
import open from '../../images/pieces/open.png';
import open_2x from '../../images/pieces/open_2x.png';
import open_hover from '../../images/pieces/open_hover.png';
import open_hover_2x from '../../images/pieces/open_hover_2x.png';
import close from '../../images/pieces/close.png';
import close_2x from '../../images/pieces/close_2x.png';
import close_hover from '../../images/pieces/close_hover.png';
import close_hover_2x from '../../images/pieces/close_hover_2x.png';

const Wrapper = styled.div`
  width: 473px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  float: right;
  padding-top: 2px;
  height: ${(GUIDELINE.header_height - 2)}px;

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    width: calc(100vmin - 90px);
    max-width: 65vmin;
    padding-top: 0;
    height: ${GUIDELINE.header_height_mobile}px;
  }

  .desktop-button {
    @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
      display: none;
    }
  }

  .mobile-button {
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
  color: ${GUIDELINE.color_white};
  background: url(${icon}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${icon_2x}) 50% 50% no-repeat;
    background-size: cover;
  }

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    position: relative;
    top: 4px;
    left: 0;
    display: inline-block;
    vertical-aling: middle;
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
const Plus = styled.span`
  display: inline-block;
  width: 23px;
  height: 23px;
  background: url(${plus}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${plus_2x}) 50% 50% no-repeat;
    background-size: 12px 12px;
  }
`
const Trigger = styled.a`
  display: inline-block;
  width: 21px;
  height: 21px;
  transition: background ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};
`
const Open = styled(Trigger)`
  background: url(${open}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${open_2x}) 50% 50% no-repeat;
    background-size: 21px 9px;
  }

  &:hover {
    background: url(${open_hover}) 50% 50% no-repeat;

    @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
      only screen and (-moz-min-device-pixel-ratio: 1.5),
      only screen and (-o-min-device-pixel-ratio: 3/2),
      only screen and (min-device-pixel-ratio: 1.5) {
      background: url(${open_hover_2x}) 50% 50% no-repeat;
      background-size: 21px 9px;
    }
  }
`
const Close = styled(Trigger)`
  background: url(${close}) 50% 50% no-repeat;

  @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (-moz-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min-device-pixel-ratio: 1.5) {
    background: url(${close_2x}) 50% 50% no-repeat;
    background-size: 21px 21px;
  }

  &:hover {
    background: url(${close_hover}) 50% 50% no-repeat;

    @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
      only screen and (-moz-min-device-pixel-ratio: 1.5),
      only screen and (-o-min-device-pixel-ratio: 3/2),
      only screen and (min-device-pixel-ratio: 1.5) {
      background: url(${close_hover_2x}) 50% 50% no-repeat;
      background-size: 21px 21px;
    }
  }
`
const DropdownWrapper = styled.span`
  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    display: none;
  }
`
const DrawerWrapper = styled.span`
  @media (min-width: ${GUIDELINE.breackpoint_sm}) {
    display: none;
  }
`

const menu = (
  <RightMenu items={ rightMenuContent } />
);

class Right extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownIsOpen: false,
      rightPanelIsOpen: false,
    };
  }

  dropdownToggle = () => {
    this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

  onClose = () => {
    this.setState({
      rightPanelIsOpen: false
    });
  };

  render() {
    const { dropdownIsOpen, rightPanelIsOpen } = this.state;

    return (
      <Wrapper>
        <Button
          className="desktop-button"
          text="Мои ставки"
          color={ `${GUIDELINE.color_white}` }
          background={ `${GUIDELINE.color_blue_gray}` }
          background_hover={ `${GUIDELINE.color_blue_gray_dark}` }
          ><Icon />
        </Button>
        <IconButton
          className="mobile-button"
          size="40px"
          radius="50%"
          color={ `${GUIDELINE.color_white}` }
          background={ `${GUIDELINE.color_blue_gray}` }
          background_hover={ `${GUIDELINE.color_blue_gray_dark}` }
          ><Icon />
        </IconButton>
        <User>
          <Ava />
          <Userinfo>
            <Username>Виктор Павлов</Username>
            <Userprice>8 608.50 P</Userprice>
          </Userinfo>
        </User>
        <IconButton
          size="23px"
          radius="50%"
          color={ `${GUIDELINE.color_white}` }
          background={ `${GUIDELINE.color_success}` }
          background_hover={ `${GUIDELINE.color_green_light}` }
          ><Plus />
        </IconButton>
        <DropdownWrapper>
          <Dropdown
            overlayClassName="dropdown-in-header-right"
            overlay={ menu }
            trigger={ ['click'] }
            onVisibleChange={(visible) =>
              this.setState({
                dropdownIsOpen: visible,
              })
            }>
            { dropdownIsOpen ?
              <Close href="#" onClick={() => {this.dropdownToggle()}} /> :
              <Open href="#" onClick={() => {this.dropdownToggle()}} />
            }
          </Dropdown>
        </DropdownWrapper>
        <DrawerWrapper>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */}
          <Open
            href="#"
            onClick={(e) => {
              e.preventDefault();
              this.setState({ rightPanelIsOpen: !rightPanelIsOpen });
            }}
            aria-label="Open Menu" />
          <Drawer
            className={ 'panel-right' }
            title={ null }
            placement={ 'right' }
            closable={ true }
            onClose={ this.onClose }
            visible={ rightPanelIsOpen }
            width="240px"
          >{ menu }</Drawer>
        </DrawerWrapper>
      </Wrapper>
    );
  }
}

export default Right;
