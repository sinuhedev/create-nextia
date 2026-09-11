import { useFx } from 'nextia'
import { useEffect } from 'react'
import functions from './functions'

export default function MyContext() {
  const { state, fx, context } = useFx(functions, (initialState) => {
    return {
      currentNum: initialState.currentNum + 1
    }
  })

  useEffect(() => {
    console.info(state.currentNum)
  }, [state.currentNum])

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
