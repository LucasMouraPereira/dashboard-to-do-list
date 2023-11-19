'use client'
import { Dispatch, SetStateAction } from 'react'
import { useMediaQuery } from 'src/utils/hooks/useMediaQuery'

import { EvaIcon } from 'src/components/presentation/EvaIcon'

import * as S from './styled'

type SideBarProps = {
  showSideBar: boolean
  setShowSideBar: Dispatch<SetStateAction<boolean>>
}

export const Menu = ({ showSideBar, setShowSideBar }: SideBarProps) => {
  const isDesktop = useMediaQuery('(min-width: 992px)')
  const toogleSideBar = () => {
    setShowSideBar(!showSideBar)
  }
  return (
    !isDesktop && (
      <S.HeaderMenu>
        <button onClick={() => toogleSideBar()}>
          <EvaIcon name="menu-outline" size="xlarge" fill="#000" />
        </button>
      </S.HeaderMenu>
    )
  )
}
