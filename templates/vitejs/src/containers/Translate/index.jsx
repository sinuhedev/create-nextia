import React from 'react'
import { useFx, css } from 'nextia'
import i18nFile from 'assets/i18n'
import './style.css'

export default function Translate ({ className, style }) {
  const { context } = useFx()

  return (
    <article className={css('Translate-container', className, '')} style={style}>

      <select
        name='i18n'
        value={context.state.i18n}
        onChange={e => {
          const { value } = e.target
          context.fx.set({ i18n: value })
          window.localStorage.setItem('i18n', value)
        }}
      >
        {i18nFile.locales.map(e => (
          <option key={e} value={e} className='m-2'>
            {e}
          </option>
        ))}
      </select>

    </article>
  )
}
