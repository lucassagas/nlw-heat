import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  @media(max-width: 1080px) {
    font-size: 93.75%;
  }

  @media(max-width: 720px) {
    font-size: 87.5%;
  }

  @media(max-width: 430px) {
    font-size: 81.25%
  }
}

body {
  background: ${props => props.theme.colors.primary};
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

}

body, input, textarea, button {
  font-family: Futura PT Book, sans-serif;
  font-weight: 400;
  color: ${props => props.theme.colors.primary};
  font-size: 1rem;
}


button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed
}
`
