import i18n from 'assets/i18n.json'
import icons from 'assets/icons.svg?raw'
import { Translate } from 'components'
import {
  I18n,
  Icon,
  Link,
  Pagex,
  startViewTransition,
  useFx,
  useQueryString,
  useResize
} from 'nextia'
import { lazy, useEffect, useRef, useState } from 'react'
import { env } from 'utils'
import functions from './functions.js'

export default function Pages() {
  const pages = useFx(functions, (initialState) => {
    return {
      num: 2087
    }
  })
  const { state, fx } = pages

  const [Page, setPage] = useState()
  const qs = useQueryString()
  const resize = useResize(env.WINDOW_RESIZE)
  const ref = useRef()

  useEffect(() => {
    const hash = ['', '#/'].includes(qs.hash) ? '#/home' : qs.hash

    const page = lazy(async () => {
      const path = hash.substring(2).split('/')

      try {
        if (path.length === 1) {
          return await import(`./${path[0]}/index.jsx`)
        } else if (path.length === 2) {
          return await import(`./${path[0]}/${path[1]}/index.jsx`)
        }
      } catch (e) {
        console.error(e)
        return await import('./not-found.jsx')
      }
    })

    if (env.PUBLIC_VIEW_TRANSITION === 'true')
      startViewTransition(setPage(page), ref.current)
    else setPage(page)
  }, [qs.hash])

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

      <main ref={ref} className="m-2">
        {Page && <Page qs={qs.queryString} resize={resize} />}
      </main>
    </Pagex>
  )
}
