import styled, { css } from 'styled-components'

export const HeaderMenu = styled.div`
  ${({ theme }) => css`
    z-index: 1;
    width: 100%;
    height: 60px;
    background-color: ${theme.colors.primary[50]};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    border-right: 0px solid rgba(97, 98, 101, 0.75);
    background-clip: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0 16px;
    button {
      width: 100%;
      max-width: 40px;
      background: transparent;
      border: 1px solid rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px 0 0;
      cursor: pointer;
    }
  `}
`
