import { css } from "@emotion/react";

export const globalStyles = css`
  html {
    width: 100%;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    font-size: 62.5%;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  a,
  address,
  em,
  img,
  ins,
  q,
  strong,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  table,
  caption,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
`;
