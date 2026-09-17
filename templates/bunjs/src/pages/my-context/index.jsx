import { useFx } from 'nextia'
import { useEffect } from 'react'

export default function MyContext() {
  const { state, fx, context } = useFx({
    currentNum: 200
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
