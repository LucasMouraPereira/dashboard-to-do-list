import * as S from './styled'

type GridProps = {
  children: React.ReactNode
  loading: boolean
}

export const Grid = ({ children, loading }: GridProps) => {
  return loading ? (
    <S.WrapperGrid>{children}</S.WrapperGrid>
  ) : (
    <S.ContainerGrid>{children}</S.ContainerGrid>
  )
}
