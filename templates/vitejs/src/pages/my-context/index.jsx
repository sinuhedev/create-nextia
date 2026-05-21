import { useEffect } from 'react'
import useFunctions from './functions'

export default function MyContext() {
  const { state, fx, context } = useFunctions()

  useEffect(() => {
    fx.init()
  }, [])

  return (
    <section>
      <br />
      <button type="button" onClick={(e) => context.fx.increment(e)}>
        increment
      </button>
      {'  '}
      <button type="button" onClick={(e) => context.fx.decrement(e)}>
        decrement
      </button>
      {'  '}
      <button type="button" onClick={() => context.fx.zero({ value: 0 })}>
        zero
      </button>
      {'  '}
      {context.state.num}
    </section>
  )
}
