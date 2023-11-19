'use client'
import { AsideRight } from './AsideRight'
import { DashboardProvider } from './Dashboard.context'
import { EvaIcon } from 'src/components/presentation/EvaIcon'

import * as S from './styled'

export const DashboardContainer = () => {
  return (
    <DashboardProvider>
      <AsideRight />
      <S.ContentHead>
        <S.WrapperHead>
          <h1>Painel</h1>
          <p>As últimas atualizações de hoje</p>
        </S.WrapperHead>
        <S.WrapperButton>
          <button>
            <EvaIcon name="search-outline" size="xlarge" fill="#00261C" />
          </button>
          <button>
            <EvaIcon name="bookmark-outline" size="xlarge" fill="#00261C" />
          </button>
        </S.WrapperButton>
      </S.ContentHead>
    </DashboardProvider>
  )
}
