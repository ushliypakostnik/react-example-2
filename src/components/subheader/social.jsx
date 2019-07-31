import React from 'react';
import styled, {css} from 'styled-components';

import GUIDELINE from '../../constants';

import telegram from '../../images/subheader/telegram.png';
import telegram_2x from '../../images/subheader/telegram_2x.png';
import telegram_hover from '../../images/subheader/telegram_hover.png';
import telegram_hover_2x from '../../images/subheader/telegram_hover_2x.png';
import steam from '../../images/subheader/steam.png';
import steam_2x from '../../images/subheader/steam_2x.png';
import steam_hover from '../../images/subheader/steam_hover.png';
import steam_hover_2x from '../../images/subheader/steam_hover_2x.png';
import vk from '../../images/subheader/vk.png';
import vk_2x from '../../images/subheader/vk_2x.png';
import vk_hover from '../../images/subheader/vk_hover.png';
import vk_hover_2x from '../../images/subheader/vk_hover_2x.png';

const Wrapper = styled.div`
  width: 112px;
  float: right;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: ${(GUIDELINE.header_height + 2)}px;
  line-height: ${(GUIDELINE.header_height + 2)}px;

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    height: ${GUIDELINE.header_height_mobile}px;
    line-height: ${GUIDELINE.header_height_mobile}px;
  }
`
const SocialLink = styled.a`
  display: inline-block;
  width: 21px;
  height: 21px;

  ${props => props.telegram && css`
    background: url(${telegram}) 50% 50% no-repeat;
    transition: background ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};

    @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
      only screen and (-moz-min-device-pixel-ratio: 1.5),
      only screen and (-o-min-device-pixel-ratio: 3/2),
      only screen and (min-device-pixel-ratio: 1.5) {
      background: url(${telegram_2x}) 50% 50% no-repeat;
      background-size: cover;
    }

    &:hover {
      background: url(${telegram_hover}) 50% 50% no-repeat;

      @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
        only screen and (-moz-min-device-pixel-ratio: 1.5),
        only screen and (-o-min-device-pixel-ratio: 3/2),
        only screen and (min-device-pixel-ratio: 1.5) {
        background: url(${telegram_hover_2x}) 50% 50% no-repeat;
        background-size: cover;
      }
    }
  `}

  ${props => props.steam && css`
    background: url(${steam}) 50% 50% no-repeat;
    transition: background ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};

    @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
      only screen and (-moz-min-device-pixel-ratio: 1.5),
      only screen and (-o-min-device-pixel-ratio: 3/2),
      only screen and (min-device-pixel-ratio: 1.5) {
      background: url(${steam_2x}) 50% 50% no-repeat;
      background-size: cover;
    }

    &:hover {
      background: url(${steam_hover}) 50% 50% no-repeat;

      @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
        only screen and (-moz-min-device-pixel-ratio: 1.5),
        only screen and (-o-min-device-pixel-ratio: 3/2),
        only screen and (min-device-pixel-ratio: 1.5) {
        background: url(${steam_hover_2x}) 50% 50% no-repeat;
        background-size: cover;
      }
    }
  `}

  ${props => props.vk && css`
    background: url(${vk}) 50% 50% no-repeat;
    transition: background ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};

    @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
      only screen and (-moz-min-device-pixel-ratio: 1.5),
      only screen and (-o-min-device-pixel-ratio: 3/2),
      only screen and (min-device-pixel-ratio: 1.5) {
      background: url(${vk_2x}) 50% 50% no-repeat;
      background-size: cover;
    }

    &:hover {
      background: url(${vk_hover}) 50% 50% no-repeat;

      @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
        only screen and (-moz-min-device-pixel-ratio: 1.5),
        only screen and (-o-min-device-pixel-ratio: 3/2),
        only screen and (min-device-pixel-ratio: 1.5) {
        background: url(${vk_hover_2x}) 50% 50% no-repeat;
        background-size: cover;
      }
    }
  `}
`

const Social = () => (
  <Wrapper>
    <SocialLink href="#" telegram />
    <SocialLink href="#" steam />
    <SocialLink href="#" vk />
  </Wrapper>
);

export default Social;
