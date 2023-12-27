import { createGlobalStyle } from "styled-components";

export const RebootCSS = createGlobalStyle`
  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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

  :root {
    --primary-bg-color: #010409;
    --secondary-bg-color: #0D1117;

    --btn-primary-bg-color: #21262D;

    --primary-txt: #E6EDF3;
    --secondary-txt: #7D8590;

    --tint-purple: #E6EDF3;
    --tint-blue: #3178C6;
    --tint-green: #238636;

    --color-default-border: #3C4043;
    /* --color-default-border: #30363D; */
    --color-default-focus: #619159;
    --color-default-hover: #8B949E;
    /* --default-border-color: #30363D; */
    /* --default-focus-color: #619159; */
    /* --color-btn-drop-down-focus: #619159; */
    /* --color-btn-drop-down-hover: #8B949E; */

    --drop-down-bg-color: #161B22;

    --maroon: #69090B;
    --bright-green: #6ae773;
    --bright-green-2: #12f287;
    --lime-ish: #cdef64;
    --blue-ish: #88d8b4;
    --some-color: #E4cf98;
    --washed-blue: #003366;

    --primary-button-color: #619159;
    --color-action-button-hover: #2EA043;

    /* --primary-focus-color: #2F81F7; */
  }
`