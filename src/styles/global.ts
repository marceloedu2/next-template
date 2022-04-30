import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    *[hidden] {
      display: none;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &:focus {
        outline: 0;
      }
    }

    body {
      font: ${theme.font.sizes.medium} ${theme.font.family};
      line-height: 1;

      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: transparent;
      }

      &::-webkit-scrollbar {
        width: 12px;
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: ${theme.colors.Default};
      }
    }

    html {
      font-size: 62.5%;
    }

    body,
    input,
    button,
    textarea {
      font: ${theme.font.sizes.medium} ${theme.font.family};
    }

    html,
    body,
    div,
    span,
    applet,
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
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
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
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-family: ${theme.font.family};
      vertical-align: baseline;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section {
      display: block;
    }

    textarea:focus,
    input:focus {
      outline: none;
    }

    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    html {
      box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    button {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      background: transparent;
      color: inherit;
      text-align: inherit;
      outline: none;
      appearance: none;
      cursor: pointer;
    }

    *,
    *::before,
    *::after {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    blockquote,
    pre,
    ul,
    ol,
    li,
    table,
    tr,
    th,
    td,
    input,
    textarea {
      user-select: text;
    }

    #app {
      display: flex;
      flex-shrink: 0;
    }

    *::-webkit-scrollbar {
      width: 5px;
    }
    *::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.display[400]};
    }
    *::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-button {
      display: none;
    }
  `}
`

export default GlobalStyle
