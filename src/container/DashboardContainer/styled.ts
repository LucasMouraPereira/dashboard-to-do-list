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

export const WrapperGrid = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: 16px;
    ${theme.breakpoints.minWidth('sm')} {
      justify-content: flex-start;
      margin-top: 60px;
    }
  `}
`

export const WrapperTasks = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
    width: 100%;
    color: ${theme.colors.context.page.text}
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.288px;
    background-color: ${theme.colors.primary[50]};
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    ${theme.breakpoints.minWidth('sm')} {
      width: 90%
    }
  `}
`
