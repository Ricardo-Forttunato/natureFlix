import { createGlobalStyle } from "styled-components";

import SourceSans3SemiBold from './fontes/SourceSans3-SemiBold.ttf';
import SourceSans3Black from './fontes/SourceSans3-Black.ttf';
import RobotoBlack from './fontes/Roboto-Black.ttf';
import RobotoRegular from './fontes/Roboto-Regular.ttf';


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SourceSans3SemiBold';
    src: local('Source Sans 3 SemiBold'), local('SourceSans3SemiBold'), url(${SourceSans3SemiBold}) format('truetype');
  }
  @font-face {
    font-family: 'SourceSans3Black';
    src: local('Source Sans 3 Black'), local('SourceSans3Black'), url(${SourceSans3Black}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoRegular';
    src: local('Roboto Regular'), local('RobotoRegular'), url(${RobotoRegular}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoBlack';
    src: local('Roboto Black'), local('RobotoBlack'), url(${RobotoBlack}) format('truetype');
  }
  :root {
    --color-white: #fff;
    --color-gray-light: #f5f5f5;
    --color-black-dark: rgba(0, 0, 0, 0.9);
    --color-Error: #E53935;
    --color-blue: #2271D1;
    --color-light-gray: #A5A5A5;
    --color-dark-gray: #262626;
    --color-natureza-selvagem: #6BD1FF;
    --color-natureza-cidade: #00C86F;
    --color-resgate: #FFBA05;    
  }
  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
    font-family: 'SourceSans3SemiBold', sans-serif;
  }
  body {
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
  }
  a {
  background-color: transparent;
  }
  abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }
  button,
  input { 
    overflow: visible;
  }
  button,
  select { 
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; 
    white-space: normal; 
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
  -webkit-appearance: textfield; 
    outline-offset: -2px; 
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
`;

export default GlobalStyles;
