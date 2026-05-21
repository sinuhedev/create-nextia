import React, { useEffect, useState, useRef, lazy } from 'react'
import { useFx, Context } from 'nextia'
import { Icon, Link } from 'components'
import { Translate, I18n } from 'containers'
import functions from './functions.js'
import { startViewTransition, useQueryString } from 'utils'

export default function Pages () {
  const self = useFx(functions)
  const { state, fx } = self

  const [Page, setPage] = useState()
  const qs = useQueryString()

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
        return await import('./http/not-found/index.jsx')
      }
    })

    startViewTransition(setPage(page), ref.current, 'fade')
  }, [qs.hash])

  return (
    <Context value={self}>
      <header style={{ display: 'flex', gap: '20px' }}>
        <Icon value='globe' />

        <Translate value={state.i18nLocale} onChange={e => fx.changeI18n(e)} />

        <I18n value='page.name' args={['Sinuhe', 'Maceda', 'Bouchan']} />

        <Link href='/' className='mr-2'>
          /
        </Link>
        <Link href='#/' className='mr-2'>
          /home
        </Link>
        <Link href='#/demo' className='mr-2'>
          /demo
        </Link>

      </header>

      <main ref={ref} className='m-2'>
        {Page && <Page qs={qs.queryString} />}
      </main>

    </Context>
  )
}
