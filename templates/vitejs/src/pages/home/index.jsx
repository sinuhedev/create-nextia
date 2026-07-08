import { useFx } from 'nextia'
import functions from './functions'

export default function HomePage() {
  const { state, initialState, fx, context } = useFx(functions)

  return (
    <section className="flex">
      <div>
        <p>Action functions</p>
        <article>
          <button
            type="button"
            className="fs-25"
            onClick={(e) => fx.increment(e)}
          >
            +
          </button>
          <button
            type="button"
            className="fs-25"
            onClick={(e) => fx.decrement(e)}
          >
            -
          </button>
        </article>
      </div>

      <div>
        <article style={{ display: 'flex' }}>
          <pre style={{ margin: '0 50px 0 50px', minHeight: '750px' }}>
            state = {JSON.stringify(state, undefined, 2)}
          </pre>
          <pre style={{ margin: '0 50px 0 50px', minHeight: '750px' }}>
            initialState = {JSON.stringify(initialState, undefined, 2)}
          </pre>
        </article>
      </div>
    </section>
  )
}
