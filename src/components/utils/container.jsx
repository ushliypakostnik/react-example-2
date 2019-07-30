import React from 'react';
import styled from 'styled-components';

import GUIDELINE from '../../constants';

const maxWidthOnDesktop = GUIDELINE.gutter * 2 + 'px';
const mobileGutter = GUIDELINE.gutter / 2 + 'px';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: calc(83.80vw + ${maxWidthOnDesktop});
  padding-left: ${GUIDELINE.gutter}px;
  padding-right: ${GUIDELINE.gutter}px;

  @media (max-width: ${GUIDELINE.breackpoint_xl_max}) {
    max-width: 100%;
  }

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    max-width: 100%;
    padding-left: ${mobileGutter};
    padding-right: ${mobileGutter};
  }
`
const Container = props => (
  <Wrapper>
    {props.children}
  </Wrapper>
);

export default Container;
