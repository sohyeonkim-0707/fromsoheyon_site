import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "MyFont";
    letter-spacing: 0.5px;
  }
  @font-face {
    font-family: "MyFont";
    src: url(/fonts/Montserrat-Light.ttf);
  }
`;
