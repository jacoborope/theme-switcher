import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    height: 100vh;
    ${props =>
      ` background-color: ${props.theme.colors.primary};
    `}
  }
  a {
    text-decoration: none;
    ${props =>
      ` color: ${props.theme.colors.secondary};
    `}
    cursor: pointer;
  }
  span, h1, h2, h3, h4, h5, h6 {
    ${props =>
      ` color: ${props.theme.colors.secondary};
      `}
  }
  main {
      padding: 1.5rem 0.5rem
  }
`

export default GlobalStyle
