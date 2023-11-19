'use client'
// import { AsideRight } from './AsideRight'
import { useMediaQuery } from 'src/utils/hooks/useMediaQuery'
import { DashboardProvider } from './Dashboard.context'
import { EvaIcon } from 'src/components/presentation/EvaIcon'
import { Grid } from 'src/components/ui/Grid'
import { Card } from 'src/components/ui/Card'
import { listProjects } from 'src/utils/local/pt/listProjects.data'
import { listTasks } from 'src/utils/local/pt/listTask.data'

import * as S from './styled'

export const DashboardContainer = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return (
    <DashboardProvider>
      {/* <AsideRight /> */}
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
      <S.WrapperGrid>
        <Grid loading={false}>
          {listProjects.map((project) => (
            <Card
              key={project.id}
              name={project.name}
              date={project.date}
              status={project.status}
              width="255px"
              height="166px"
              bg="#fff3db"
            />
          ))}
        </Grid>
      </S.WrapperGrid>
      <S.WrapperTasks>
        {listTasks
          .filter((tasks) => tasks.projectId === listProjects[0].id)
          .map(({ id, name }) => (
            <div key={id}>
              <span>{name}</span>
            </div>
          ))}
      </S.WrapperTasks>
      <Card
        name={listProjects[0].name}
        date={listProjects[0].date}
        status={listProjects[0].status}
        width={isDesktop ? '90%' : '100%'}
        height="390px"
        bg="#fff3db"
      />
    </DashboardProvider>
  )
}
