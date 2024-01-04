import { createGlobalStyle } from "styled-components";

export const RebootCSS = createGlobalStyle`
  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    font-family: var(--font-family);
    font-feature-settings: normal;
    font-variation-settings: normal;
  }

  * {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }

  html {
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
  }

  button {
    font-family: var(--font-family);
  }

  input {
    font-family: var(--font-family);
  }

  /* Color Variables */
  :root {
    --font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    
    --primary-bg-color: #010409;
    --secondary-bg-color: #0D1117;
    --primary-txt: #E6EDF3;
    --secondary-txt: #7D8590;
    --color-default-border: #3C4043;
    --color-default-focus: #619159;
    --color-default-hover: #8B949E;
    --drop-down-bg-color: #161B22;
    --color-gray: #30363D;
    --color-neutral-muted: #6E768199;
    --color-overlay-shadow: 0 0 0 1px #30363D, 0 16px 32px #010409D9;

    /* PRIMARY BUTTON */
    --color-button-primary-background: #238636;
    --color-button-primary-hover-background: #2EA043;
    --color-button-primary-text: #FFFFFF;
    --color-button-primary-border: #F0F6FC1A;

    /* SECONDARY BUTTON */
    --color-button-secondary-background: #21262D;
    --color-button-secondary-hover-background: #30363D;
    --color-button-secondary-text: #C9D1D9;
    --color-button-secondary-border: #F0F6FC1A;
    --color-button-secondary-hover-border: #8B949E;
  }
`