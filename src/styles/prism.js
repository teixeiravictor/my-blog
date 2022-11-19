import { css } from "styled-components";
import theme from "styles/theme";

export default css`
  code {
    white-space: pre;
  }
  code[class*="language-"],
  pre[class*="language-"] {
    color: ${theme.colors.secondary};
    background: none;
    font-size: ${theme.font.sizes.xsmall};
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    width: 100%;
  }
  /* Code blocks */
  pre[class*="language-"] {
    padding-top: ${theme.spacings.xsmall};
    padding-bottom: ${theme.spacings.xsmall};
    padding-left: ${theme.spacings.xsmall};
    padding-right: ${theme.spacings.xsmall};
    margin: ${theme.spacings.small} 0;
    overflow: auto;
    min-width: 100%;
    white-space: nowrap;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${theme.colors.darkPrimary};
    border: 1px solid ${theme.colors.darkPrimary};
    border-radius: ${theme.border.radius};
  }
`;
