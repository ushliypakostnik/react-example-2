import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import GUIDELINE from '../../constants';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  color:  ${props => props.color};
  background:  ${props => props.background};
  border-radius: ${GUIDELINE.btn_borderradius}px;
  padding: ${GUIDELINE.btn_padding_vertical}px ${GUIDELINE.btn_padding_horizontal}px;

  &:hover {
    color:  ${props => props.color};
  }
`
const WrapperWithIcon = styled(Wrapper)`
  position: relative;
  padding-left: 45px;
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
    const { color, background, text, children } = this.props;

    return (
      <Fragment>
        { children ?
          <WrapperWithIcon
            as='a'
            href="#"
            color={color}
            background={background}
          >{ children }<Text>{ text }</Text></WrapperWithIcon> :
          <Wrapper
            as='a'
            href="#"
            color={color}
            background={background}
          ><Text>{ text }</Text></Wrapper>
        }
      </Fragment>
    );
  }
}

export default Button;
