import { Counter } from 'components'
import useFunctions from './functions'

export default function ViewTransitionPage() {
  const { state, fx } = useFunctions()

  return (
    <section>
      Counters
      <Counter
        value={state.count}
        animation="count"
        onChange={() => {
          fx.set({ count: state.count + 1 })
        }}
      />
      <br />
      <br />
      <Counter
        value={state.count2}
        animation="count2"
        onChange={() => {
          fx.set({ count2: state.count2 + 10 })
        }}
      />
    </section>
  )
}
