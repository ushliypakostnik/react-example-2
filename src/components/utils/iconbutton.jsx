import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GUIDELINE from '../../constants';

const Wrapper = styled.a`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  padding: 0;
  text-align: center;
  border-radius: ${props => props.radius};
  width: ${props => props.size};
  height: ${props => props.size};
  line-height: ${props => props.size};
  color:  ${props => props.color};
  background:  ${props => props.background};
  transition: background ${GUIDELINE.transition_duration} ${GUIDELINE.transition_timingfunction};

  &:hover {
    color:  ${props => props.color};
    background:  ${props => props.background_hover || props.background};
  }
`
const IconButton = props => (
  <Wrapper
    as='a'
    href="#"
    size={props.size}
    color={props.color}
    background={props.background}
    background_hover={props.background_hover}
    radius={props.radius}
    className={props.className}
  >{ props.children }</Wrapper>
);

IconButton.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  background_hover: PropTypes.string,
  text: PropTypes.string,
  radius: PropTypes.string,
  className: PropTypes.string,
};

export default IconButton;
