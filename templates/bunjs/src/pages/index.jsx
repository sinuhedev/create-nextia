import i18n from 'assets/i18n.json'
import icons from 'assets/icons.svg' with { type: 'text' }
import { Translate } from 'components'
import { I18n, Icon, Link, Pagex, useFx, usePage, useQueryString } from 'nextia'
import { useRef } from 'react'
import { env } from 'utils'
import functions from './functions.js'

const PAGES = {
  env: () => import('./env/index.jsx'),
  home: () => import('./home/index.jsx'),
  icons: () => import('./icons/index.jsx'),
  images: () => import('./images/index.jsx'),
  mockapi: () => import('./mockapi/index.jsx'),
  'my-context': () => import('./my-context/index.jsx'),
  'search-params': () => import('./search-params/index.jsx'),
  'subpage/hello': () => import('./subpage/hello/index.jsx'),
  translate: () => import('./translate/index.jsx'),
  'view-transition': () => import('./view-transition/index.jsx'),
  notFound: () => import(`./not-found.jsx`)
}

export default function Pages() {
  const pages = useFx(functions, (initialState) => {
    initialState.num = 2087
    return initialState
  })
  const { state, fx } = pages

  const viewTransitionRef = useRef()
  const qs = useQueryString()
  const Page = usePage({
    hash: qs.hash,
    homePage: env.HOME_PAGE,
    importPage: (path) => {
      const currentPage = PAGES[path.join('/')] ?? PAGES.notFound
      return currentPage()
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
        <Icon id="globe" width="24" />

        <Translate />

        <I18n value="page.name" args={['Sinuhe', 'Maceda', 'Bouchan']} />

        <button
          type="button"
          className="btn-md"
          onClick={(e) => fx.increment(e)}
        >
          increment
        </button>
        {'  '}
        <button
          type="button"
          className="btn-md"
          onClick={(e) => fx.decrement(e)}
        >
          decrement
        </button>
        {'  '}
        <button
          type="button"
          className="btn-md"
          onClick={() => fx.zero({ value: 0 })}
        >
          zero
        </button>
        {'  '}
        {state.num}
        {'  '}
        {state.loading ? <span> Loading... </span> : <span> View.. </span>}
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
        <Link href="#/my-context" className="mr-2">
          /my-context
        </Link>
        <Link href="#/mockapi" className="mr-2">
          /mockapi
        </Link>
        <Link
          href="#/search-params"
          value={{ id: 1, user: 'Sinuhe' }}
          className="mr-2"
        >
          /search-params
        </Link>
        <Link href="#/subpage/hello" className="mr-2">
          /subpage/hello
        </Link>
        <Link href="#/translate" className="mr-2">
          /translate
        </Link>
        <Link href="#/view-transition" className="mr-2">
          /view-transition
        </Link>
        <Link href="#/images" className="mr-2">
          /images
        </Link>
        <Link href="#/icons" className="mr-2">
          /icons
        </Link>
        <Link href="#/dashboard" className="mr-2">
          /not-found
        </Link>
      </aside>

      <main ref={viewTransitionRef} className="m-2">
        {Page && <Page qs={qs.queryString} />}
      </main>
    </Pagex>
  )
}
