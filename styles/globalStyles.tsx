import { createGlobalStyle } from 'styled-components'
import { typography } from './mixins'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
  }
  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    7. Remove built-in form typography styles
  */
  /* input, button, textarea, select {
    font: inherit;
  } */
  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }

  :root {
    --kkbk--font--title: "Oswald", sans-serif;
    --kkbk--font--base: "Roboto", sans-serif;
  }

  ${theme}

  body {
    font-family: var(--kkbk--font--base);
    ${typography.text.base};
  }

  body, html {
    overflow-x: hidden;
  }

  body > div:first-child,
  #__next,
  #__next > div {
    height: 100%;
  }
`
