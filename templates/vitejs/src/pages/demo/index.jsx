import React, { useEffect } from 'react'
import { useFx, css } from 'nextia'
import functions from './functions'
import './style.css'

export default function DemoPage () {
  const { state, fx } = useFx(functions)

  return (
    <section className={css('DemoPage', '')}>
      DemoPage
    </section>
  )
}
