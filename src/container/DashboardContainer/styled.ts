import styled, { css } from 'styled-components'

export const ContentHead = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    ${theme.breakpoints.minWidth('sm')} {
      max-width: 690px;
      padding-right: 80px;
      flex-direction: row;
      flex-direction: unset;
    }
  `}
`

export const WrapperHead = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${theme.breakpoints.minWidth('sm')} {
      align-items: flex-start;
      margin: 0 auto;
      max-width: 992px;
    }
  `}
`

export const WrapperButton = styled.div`
  ${() => css`
    display: flex;
    gap: 16px;
    width: 100%;
    max-width: 116px;
    button {
      width: 100%;
      max-width: 60px;
      background: transparent;
      border: 1px solid rgba(0, 0, 0, 0.25);
      border-radius: 4px;
    }
  `}
`
