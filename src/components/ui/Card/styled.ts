import styled, { css } from 'styled-components'

type CardButtonProps = {
  width: string
  height: string
  bg: string
}

export const CardButton = styled.button<CardButtonProps>`
  ${({ theme, width, height, bg }) => css`
    width: ${width};
    min-height: ${height};
    background: ${bg};
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 5px;
    color: ${theme.colors.context.page.text};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.288px;
    h2 {
      font-size: 16px;
    }
  `}
`
