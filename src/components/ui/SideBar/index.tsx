'use client'
import { useState } from 'react'
import Link from 'next/link'
import { EvaIcon } from 'src/components/presentation/EvaIcon'
import { linksRouter } from 'src/utils/local/pt/global.data'
import { useMediaQuery } from 'src/utils/hooks/useMediaQuery'
import { Profile } from 'src/components/presentation/Profile'
import { Logo } from 'src/components/presentation/Logo'

import * as S from './styled'

type SideBarProps = {
  showSideBar: boolean
}

export const SideBar = ({ showSideBar }: SideBarProps) => {
  const [items, setItems] = useState(linksRouter)
  const isDesktop = useMediaQuery('(min-width: 992px)')
  const showBar = !isDesktop && showSideBar
  const handleItemClick = (clickedId: number) => {
    const updatedItems = items.map((item) => {
      if (item.id === clickedId) {
        return { ...item, active: !item.active }
      }
      return item.active ? { ...item, active: false } : item
    })

    setItems(updatedItems)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons: any = {
    0: (
      <EvaIcon
        name="layout"
        size="xlarge"
        fill={items[0].active ? '#00DEA3' : '#00261C'}
      />
    ),
    1: (
      <EvaIcon
        name="file-text"
        size="xlarge"
        fill={items[1].active ? '#00DEA3' : '#00261C'}
      />
    ),
    2: (
      <EvaIcon
        name="pie-chart-2"
        size="xlarge"
        fill={items[2].active ? '#00DEA3' : '#00261C'}
      />
    ),
    3: (
      <EvaIcon
        name="layers"
        size="xlarge"
        fill={items[3].active ? '#00DEA3' : '#00261C'}
      />
    ),
    4: (
      <EvaIcon
        name="bell"
        size="xlarge"
        fill={items[4].active ? '#00DEA3' : '#00261C'}
      />
    ),
  }
  return (
    <>
      <S.Aside showSideBar={showBar}>
        <Profile
          photoURL="/avatar/image.jpg"
          name="Sara"
          email="sara@gmail.com"
        />
        {items.map((link) => (
          <S.ClickedItem
            key={link.id}
            onClick={() => handleItemClick(link.id)}
            active={link.active}
          >
            <Link href={link.path} replace>
              {icons[link.id]}
              {link.label}
            </Link>
          </S.ClickedItem>
        ))}
        <Logo logoSrc="/big-bang-logo.jpeg" companyName="BigBang Digital" />
      </S.Aside>
    </>
  )
}
