import React from 'react'
import Image from 'next/image'

import * as S from './styled'

type LogoProps = {
  logoSrc: string
  companyName: string
}

export const Logo: React.FC<LogoProps> = ({ logoSrc, companyName }) => {
  return (
    <S.LogoContainer>
      <Image src={logoSrc} width={50} height={50} alt="Logo" priority />
      <S.CompanyName>{companyName}</S.CompanyName>
    </S.LogoContainer>
  )
}
