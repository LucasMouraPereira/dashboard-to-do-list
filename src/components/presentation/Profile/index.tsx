import Image from 'next/image'

import * as S from './styled'

type ProfileProps = {
  photoURL: string
  name: string
  email: string
}

export const Profile: React.FC<ProfileProps> = ({ photoURL, name, email }) => {
  return (
    <S.ProfileContainer>
      <Image src={photoURL} width={100} height={100} alt="Profile" priority />
      <S.ProfileDetails>
        <h2>{name}</h2>
        <p>{email}</p>
      </S.ProfileDetails>
    </S.ProfileContainer>
  )
}
