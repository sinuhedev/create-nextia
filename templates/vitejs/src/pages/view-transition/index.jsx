import { Counter } from 'components'
import { useFx } from 'nextia'

export default function ViewTransitionPage() {
  const { state, fx } = useFx({
    count: 1,
    count2: 1
  })

  return (
    <section>
      Counters
      <Counter
        value={state.count}
        animation="count"
        onChange={() => {
          fx.put({ count: state.count + 1 })
        }}
      />
      <br />
      <br />
      <Counter
        value={state.count2}
        animation="count2"
        onChange={() => {
          fx.put({ count2: state.count2 + 10 })
        }}
      />
    </section>
  )
}
