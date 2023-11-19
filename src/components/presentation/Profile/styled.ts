import styled, { css } from 'styled-components'

export const ProfileContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    position: absolute;
    top: 8%;
    img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
  `}
`

export const ProfileDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.context.page.text};
    letter-spacing: 0.288px;
    h2 {
      font-size: 36px;
      font-weight: 700;
    }
    p {
      font-size: 18px;
      font-weight: 400;
    }
  `}
`
