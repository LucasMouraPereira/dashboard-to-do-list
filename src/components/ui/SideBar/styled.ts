import styled, { css } from 'styled-components'

type AsideProps = {
  showSideBar: boolean
}

export const Aside = styled.aside<AsideProps>`
  ${({ theme, showSideBar }) => css`
    width: 100%;
    max-width: 255px;
    height: 100vh;
    background-color: ${theme.colors.primary[50]};
    position: fixed;
    top: 0;
    transition: left 0.4s;
    left: ${showSideBar ? '-255px' : '0'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-right: 0px solid rgba(97, 98, 101, 0.75);
    background-clip: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`

type ClickedItem = {
  active: boolean
}

export const ClickedItem = styled.div<ClickedItem>`
  ${({ theme, active }) => css`
    width: 100%;
    max-width: 160px;
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      gap: 16px;
      color: ${active
        ? theme.colors.palette.green[300]
        : theme.colors.context.page.text};
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0.288px;
    }
  `}
`
