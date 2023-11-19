import { useMediaQuery } from 'src/utils/hooks/useMediaQuery'

import * as S from './styled'

export const AsideRight = () => {
  const isDesktop = useMediaQuery('(min-width: 992px)')
  return (
    <S.Aside isDesktop={isDesktop}>
      <p>AsideRight</p>
    </S.Aside>
  )
}
