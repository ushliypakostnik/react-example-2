import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  line-height: 48px;
  padding: 0;
  text-align: center;
  color:  ${props => props.color};
  background:  ${props => props.background};
  border-radius: 20px;

  &:hover {
    color:  ${props => props.color};
  }
`
const IconButton = ({color, background, children}) => (
  <Wrapper
    as='a'
    href="#"
    color={color}
    background={background}
  >{ children }</Wrapper>
);

export default IconButton;
