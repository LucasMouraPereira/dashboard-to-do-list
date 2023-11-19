import { paths } from 'src/utils/enums/paths'

export const linksRouter = [
  {
    id: 0,
    label: 'Painel',
    path: paths.DASHBOARD,
    active: true,
  },
  {
    id: 1,
    label: 'Projetos',
    path: paths.PROJECTS,
    active: false,
  },
  {
    id: 2,
    label: 'Leads',
    path: paths.LEADS,
    active: false,
  },
  {
    id: 3,
    label: 'Campanhas',
    path: paths.CAMPAIGNS,
    active: false,
  },
  {
    id: 4,
    label: 'Notificações',
    path: paths.NOTIFICATIONS,
    active: false,
  },
]
