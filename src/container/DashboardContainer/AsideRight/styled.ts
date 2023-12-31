import styled, { css } from 'styled-components'

type AsideProps = {
  isDesktop: boolean
}

export const Aside = styled.aside<AsideProps>`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.primary[50]};
    position: fixed;
    height: 400px;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-right: 0px solid rgba(97, 98, 101, 0.75);
    background-clip: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: -1;
    ${theme.breakpoints.minWidth('lg')} {
      top: 0;
      right: 0;
      left: unset;
      max-width: 455px;
      height: 100vh;
    }
  `}
`
