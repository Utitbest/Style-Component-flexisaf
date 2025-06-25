import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease-in-out;
    font-family: 'Segoe UI', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.button};
    text-decoration: none;
  }
`
