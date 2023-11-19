import { useMediaQuery } from 'src/utils/hooks/useMediaQuery'

import * as S from './styled'

export const AsideRight = () => {
  const isDesktop = useMediaQuery('(min-width: 1094px)')
  return (
    isDesktop && (
      <S.Aside isDesktop={isDesktop}>
        <p>AsideRight</p>
      </S.Aside>
    )
  )
}
