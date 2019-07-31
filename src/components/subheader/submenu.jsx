import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import GUIDELINE from '../../constants';

const Wrapper = styled.ul`
  display: inline-block;
  vertical-align: top;
  margin: 0;
  padding-left: 36px;
  height: ${(GUIDELINE.header_height + 2)}px;
  line-height: ${(GUIDELINE.header_height + 2)}px;

  .panel-left & {
    height: auto;
    padding-left: 0;
    padding-top: 50px;
    padding-bottom: 20px;
  }

  @media (max-width: ${GUIDELINE.breackpoint_sm_max}) {
    display: none;

    .panel-left & {
      display: block;
    }
  }
`
const Item = styled.li`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  height: ${(GUIDELINE.header_height + 2)}px;
  line-height: ${(GUIDELINE.header_height + 8)}px;
  border-bottom: 2px solid ${GUIDELINE.color_white};
  transition: border-color ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};

  &:not(:last-child) {
    margin-right: 55px;
  }

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    height: ${GUIDELINE.header_height_mobile}px;
    line-height: ${GUIDELINE.header_height_mobile}px;
  }

  ${props => props.active && css`
    border-bottom: 2px solid ${GUIDELINE.color_active};
  `}

  .panel-left & {
    display: block;
    text-align: right;
    padding-right: 40px;
    background: ${GUIDELINE.color_white};
    border-bottom: 1px solid ${GUIDELINE.color_border};

    &:first-child {
      border-top: 1px solid ${GUIDELINE.color_border};
    }

    &:not(:last-child) {
      margin-right: 0;
    }

    ${props => props.active && css`
      border-bottom: 1px solid ${GUIDELINE.color_border};
      border-right: 2px solid ${GUIDELINE.color_active};
    `}
  }
`

const Active = styled.a`
  color: ${GUIDELINE.color_text_light};
  font-family: ${GUIDELINE.fontfamily_sans};
  letter-spacing: ${GUIDELINE.letterspacing_normal};
  font-size:  ${GUIDELINE.fontsize_normal}px;
  font-weight: ${GUIDELINE.fontweight_sans_bold};
  line-height:  ${GUIDELINE.lineheight_normal}px;
  white-space: nowrap;

  &:hover {
    color: ${GUIDELINE.color_text_light};
  }

  @media (max-width: ${GUIDELINE.breackpoint_md_max}) {
    font-size:  ${GUIDELINE.fontsize_small}px;
    line-height:  ${GUIDELINE.lineheight_small}px;
  }
`

export const SubMenuItem = ({ id, text }) => (
  <Item active={id === 3}>
    <Active // eslint-disable-line jsx-a11y/anchor-is-valid
      href="#">
      <span>{text}</span>
    </Active>
  </Item>
);

const Submenu = ({ items }) => (
  <Wrapper>
    { items.map((item, index) => {
      return <SubMenuItem
        key={ index }
        id={ index }
        text={ item }
      />
    })}
  </Wrapper>
);

SubMenuItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

Submenu.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Submenu;
