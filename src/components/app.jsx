import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import GUIDELINE from '../constants';

import Header from './header/header';
import Subheader from './subheader/subheader';

const GlobalStyle = createGlobalStyle`
  #root {
    height: 100vh;
  }

  body {
    margin: 0
    padding: 0;
    height: 100vh;
    color: ${GUIDELINE.color_text};
    background-color: ${GUIDELINE.color_text};
    backface-visibility: hidden;
    font-size:  ${GUIDELINE.fontsize_small}px;
    line-height: ${GUIDELINE.lineheight_small}px;
    letter-spacing: ${GUIDELINE.letterspacing_normal};
    overflow-x: hidden;
  }

  a {
    color: ${GUIDELINE.color_link};
    text-decoration: none;

    &:hover {
      color: ${GUIDELINE.color_text};
    }
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  // Кнопки
  button,
  input,
  textarea,
  select,
  a {
    outline: none !important;

    &:hover,
    &:active,
    &:focus {
      outline: none !important;
    }
  }

  // Placeholders
  ::-webkit-input-placeholder,
  ::-moz-placeholder,
  :-moz-placeholder,
  :-ms-input-placeholder {
    color: ${GUIDELINE.color_placeholder};
  }

  img {
    border-style: none; // Remove the border on images inside links in IE 10.
  }

  button,
  input {
    overflow: visible; // Show the overflow in Edge
  }

  button,
  select {
    text-transform: none; // Remove the inheritance of text transform in Firefox.
  }

  textarea {
    overflow: auto; // Remove the default vertical scrollbar in IE 10+.
  }
`
const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Subheader />
  </Fragment>
);

export default App;
