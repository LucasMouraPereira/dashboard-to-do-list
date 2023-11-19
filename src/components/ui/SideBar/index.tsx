import Link from 'next/link'
import { linksRouter } from 'src/utils/local/pt/global.data'

import * as S from './styled'

export const SideBar = () => (
  <S.Aside>
    {linksRouter.map((link) => (
      <Link key={link.id} href={link.path} replace>
        {link.label}
      </Link>
    ))}
  </S.Aside>
)
