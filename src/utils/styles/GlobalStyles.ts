'use client'
import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: inherit;-webkit-font-smoothing: antialiased;

    ${({ theme }) => css`
      html,
      body {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-size: 16px;
        font-family: ${theme.typography.family.primary};
      }
      body {
        background-color: ${theme.colors.context.page.bg};
      }
      body.scroll-hide::-webkit-scrollbar {
        display: none;
      }
      body.scroll-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 700;
      }
      a {
        text-decoration: none;
        color: unset;
      }
    `}
  }
`
