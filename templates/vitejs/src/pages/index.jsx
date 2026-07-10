import i18n from 'assets/i18n.json'
import icons from 'assets/icons.svg?raw'
import { Translate } from 'components'
import {
  I18n,
  Icon,
  Link,
  Pagex,
  useFx,
  usePage,
  useQueryString,
  useResize
} from 'nextia'
import { useRef } from 'react'
import { env } from 'utils'
import functions from './functions.js'

export default function Pages() {
  const pages = useFx(functions, (initialState) => {
    return {
      num: 2087
    }
  })
  const { state, fx } = pages

  const viewTransitionRef = useRef()
  const qs = useQueryString()
  const resize = useResize(env.WINDOW_RESIZE)
  const Page = usePage({
    hash: qs.hash,
    homePage: env.HOME_PAGE,
    importPage: async (path) => {
      if (path === undefined) return await import(`./not-found.jsx`)
      if (path.length === 1) return await import(`./${path[0]}/index.jsx`)
      if (path.length === 2)
        return await import(`./${path[0]}/${path[1]}/index.jsx`)
    },
    viewTransition: {
      ref: viewTransitionRef,
      name: env.VIEW_TRANSITION_NAME
    }
  })

  return (
    <Pagex
      value={{
        context: pages,
        icons,
        i18n
      }}
    >
      <header style={{ display: 'flex', gap: '20px', margin: '20px' }}>
        <Icon id="exit" width="24" className="animate" />

        <Translate />

        <I18n value="page.name" args={['Sinuhe', 'Maceda', 'Bouchan']} />
      </header>

      <aside className="m-2">
        <Link href="/" className="mr-2">
          /
        </Link>

        <Link href="#/" className="mr-2">
          /home
        </Link>

        <Link href="#/env" className="mr-2">
          /env
        </Link>

        <Link href="#/dashboard" className="mr-2">
          /not-found
        </Link>
      </aside>

      <main ref={viewTransitionRef} className="m-2">
        {Page && <Page qs={qs.queryString} resize={resize} />}
      </main>
    </Pagex>
  )
}
