import styled, { css } from 'styled-components'

export const Aside = styled.aside`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.primary[50]};
    max-width: 255px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-right: 0px solid rgba(97, 98, 101, 0.75);
    background-clip: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-filter: blur(3px);
  `}
`
