import * as S from './styled'

type CardProps = {
  name: string
  date: string
  status: string
  width: string
  height: string
  bg: string
}
export const Card = ({ name, date, status, width, height, bg }: CardProps) => {
  return (
    <S.CardButton width={width} height={height} bg={bg}>
      <h2>{name}</h2>
      <p>
        <strong>Data de criação:</strong> {date}
      </p>
      <span>
        <strong>Status:</strong> {status}
      </span>
    </S.CardButton>
  )
}
