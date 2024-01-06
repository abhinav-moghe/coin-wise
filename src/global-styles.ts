import { createGlobalStyle, css } from "styled-components"

export const RebootCSS = createGlobalStyle`${css`
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

  /* scrollbar */
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #171717;
  }

  ::-webkit-scrollbar-thumb {
    background: #959595;
    border-radius: 6px;
  }
`}`

export const Theme = createGlobalStyle`${css`
  /* Color Variables */
  :root {
    --font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";

    --primary-bg-color: #010409;
    --secondary-bg-color: #0d1117;
    --primary-txt: #e6edf3;
    --secondary-txt: #7d8590;
    --color-default-border: #3c4043;
    --color-default-focus: #619159;
    --color-default-hover: #8b949e;
    --drop-down-bg-color: #161b22;
    --color-gray: #30363d;
    --color-neutral-muted: #6e768199;
    --color-overlay-shadow: 0 0 0 1px #30363d, 0 16px 32px #010409d9;

    /* PRIMARY BUTTON */
    --color-button-primary-background: #238636;
    --color-button-primary-hover-background: #2ea043;
    --color-button-primary-text: #ffffff;
    --color-button-primary-border: #f0f6fc1a;

    /* SECONDARY BUTTON */
    --color-button-secondary-background: #21262d;
    --color-button-secondary-hover-background: #30363d;
    --color-button-secondary-text: #c9d1d9;
    --color-button-secondary-border: #f0f6fc1a;
    --color-button-secondary-hover-border: #8b949e;
  }
`}`
