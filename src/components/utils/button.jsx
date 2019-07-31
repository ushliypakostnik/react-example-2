import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import GUIDELINE from '../../constants';

const Wrapper = styled.button`
  display: inline-block;
  vertical-align: middle;
  color:  ${props => props.color};
  background:  ${props => props.background};
  border-radius: ${GUIDELINE.btn_borderradius}px;
  padding: ${GUIDELINE.btn_padding_vertical}px ${GUIDELINE.btn_padding_horizontal}px;
  transition: background ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};

  &:hover {
    color:  ${props => props.color};
    background:  ${props => props.background_hover};
  }

  ${props => props.icon && css`
    position: relative;
    padding-left: 45px;
  `}
`

const Text = styled.span`
  font-family: ${GUIDELINE.fontfamily_sans};
  letter-spacing: ${GUIDELINE.letterspacing_normal};
  font-size:  ${GUIDELINE.fontsize_msmall}px;
  font-weight: ${GUIDELINE.fontweight_sans_regular};
  line-height:  ${GUIDELINE.lineheight_msmall}px;
  white-space: nowrap;
`

class Button extends Component {
  render() {
    const { className, color, background, background_hover, text, children } = this.props;

    return (
      <Wrapper
        as='a'
        href="#"
        color={ color }
        background={ background }
        background_hover={ background_hover }
        className={ className }
        icon={ children }
      >{ children }<Text>{ text }</Text>
      </Wrapper>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  background_hover: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element,
};

export default Button;
