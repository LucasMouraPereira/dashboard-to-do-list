import styled, { css } from 'styled-components'

export const LogoContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    bottom: 10%;
  `}
`

export const CompanyName = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.context.page.text};
    letter-spacing: 0.288px;
    font-size: 18px;
    font-weight: 700;
  `}
`
