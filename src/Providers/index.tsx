'use client'
import { Suspense, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'src/utils/styles/GlobalStyles'
import { theme } from 'src/utils/styles/theme'
import { Container } from 'src/components/ui/Container'
import { SideBar } from 'src/components/ui/SideBar'
import { Menu } from 'src/components/ui/Menu'

import type { ChildrenProps } from 'src/utils/types/global.types'

export const Providers = ({ children }: ChildrenProps) => {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container className={`${theme.roboto_mono} font-sans`}>
        <Suspense fallback={null}>
          <Menu showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
          <SideBar showSideBar={showSideBar} />
        </Suspense>
        {children}
      </Container>
    </ThemeProvider>
  )
}
