import styled, { css } from 'styled-components'

export const WrapperGrid = styled.div`
  ${({ theme }) => css`
    span {
      &[aria-live='polite'] {
        display: grid;
        grid-template-areas:
          'line1'
          'line2'
          'line3'
          'line4'
          'line5'
          'line6'
          'line7'
          'line8'
          'line9'
          'line10'
          'line11'
          'line12';
        grid-gap: 16px;
        justify-content: center;

        ${theme.breakpoints.minWidth('md')} {
          grid-template-areas:
            'line1 line1'
            'line2 line2'
            'line3 line3'
            'line4 line4'
            'line5 line5'
            'line6 line6';
        }

        ${theme.breakpoints.minWidth('lg')} {
          grid-template-areas:
            'line1 line1 line1 line1'
            'line2 line2 line2 line2'
            'line3 line3 line3 line3';
        }
      }
    }
    br {
      display: none;
    }
  `}
`

export const ContainerGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas:
      'line1'
      'line2'
      'line3'
      'line4'
      'line5'
      'line6'
      'line7'
      'line8'
      'line9'
      'line10'
      'line11'
      'line12';
    grid-gap: 16px;
    justify-content: center;

    ${theme.breakpoints.minWidth('md')} {
      grid-template-areas:
        'line1 line1'
        'line2 line2'
        'line3 line3'
        'line4 line4'
        'line5 line5'
        'line6 line6';
    }

    ${theme.breakpoints.minWidth('lg')}
      grid-template-areas:
        'line1 line1 line1'
        'line2 line2 line2'
        'line3 line3 line3'
        'line4 line4 line4';
    }

    ${theme.breakpoints.minWidth('xl')} {
        grid-template-areas:
          'line1 line1 line1 line1'
          'line2 line2 line2 line2'
          'line3 line3 line3 line3';
      }
    }
  `}
`
