import React, { useEffect } from 'react'
import './style.css'
import { useFx, css } from 'nextia'
import functions from './functions'

export default function HomePage () {
  const { state, initialState, fx, context } = useFx(functions)

  return (
    <section className={css('HomePage', 'container')}>
      homePage
    </section>
  )
}
