import { createGlobalStyle } from "antd-style";
import cavoliniFont from "../assets/fonts/CAVOLINI/CAVOLINI.TTF";
import cavoliniFontBold from "../assets/fonts/CAVOLINI/CAVOLINIBOLD.TTF";


const FontApp = createGlobalStyle`
  @font-face {
    font-family: "Cavolini";
    src: url(${cavoliniFont}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: "Cavolini";
    src: url(${cavoliniFontBold}) format('truetype');
    font-weight: 700;
  }
`;

export default FontApp;