import React, { Component } from 'react';
import styled from 'styled-components';

import GUIDELINE from '../../constants';
import { subMenuContent } from '../../config';

import { Drawer } from 'antd';
import '../../libraries/drawer.css';

import Container from '../utils/container';
import Support from './support';
import Submenu from './submenu';
import Social from './social';

import open from '../../images/pieces/open.png';
import open_2x from '../../images/pieces/open_2x.png';
import open_hover from '../../images/pieces/open_hover.png';
import open_hover_2x from '../../images/pieces/open_hover_2x.png';

const Wrapper = styled.div`
  height: ${(GUIDELINE.header_height + 2)}px;
  line-height: ${(GUIDELINE.header_height + 2)}px;
  background: ${GUIDELINE.color_white};

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    height: ${GUIDELINE.header_height_mobile}px;
    line-height: ${GUIDELINE.header_height_mobile}px;
  }
`
const DrawerWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-left: 25px;

  @media (min-width: ${GUIDELINE.breackpoint_md}) {
    display: none;
  }
`
const Open = styled.a`
  transform: rotate(180deg);
  display: inline-block;
  position: relative;
  top: 5px;
  width: 21px;
  height: 21px;
  background: url(${open}) 50% 50% no-repeat;
  transition: background ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};

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

class Subheader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftPanelIsOpen: false,
    };
  }

  showDrawer = () => {
    this.setState({
      leftPanelIsOpen: true
    });
  };

  onClose = () => {
    this.setState({
      leftPanelIsOpen: false
    });
  };

  render() {
    const { leftPanelIsOpen } = this.state;

    return (
      <Wrapper>
        <Container>
          <Support href="#" />
          <Submenu items={ subMenuContent } />
          <DrawerWrapper>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */}
            <Open
              href="#"
              onClick={(e) => {
                e.preventDefault();
                this.setState({ leftPanelIsOpen: !leftPanelIsOpen });
              }}
              aria-label="Open Menu" />
            <Drawer
              className={ 'panel-left' }
              title={ null }
              placement={ 'left' }
              closable={ true }
              onClose={ this.onClose }
              visible={ leftPanelIsOpen }
              width="240px"
            >
              <Submenu items={ subMenuContent } />
            </Drawer>
          </DrawerWrapper>
          <Social />
        </Container>
      </Wrapper>
    );
  }
}

export default Subheader;
