import { useFx } from 'nextia'
import functions from './functions'

export default function MockapiPage() {
  const { initialState, state, fx } = useFx(functions)

  return (
    <section className="flex">
      <section className="flex-column m-2">
        <button type="button" onClick={() => fx.reset()}>
          Reset
        </button>

        <button
          type="button"
          onClick={() => {
            fx.users()
          }}
        >
          Get users
        </button>

        <button
          type="button"
          onClick={() => {
            fx.users(state.form.id)
          }}
        >
          Get user
        </button>

        <button
          type="button"
          onClick={() => {
            fx.createUser()
          }}
        >
          Create user
        </button>

        <button
          type="button"
          onClick={() => {
            fx.updateUser(state.form.id)
          }}
        >
          Update user
        </button>

        <button
          type="button"
          onClick={() => {
            fx.deleteUser(state.form.id)
          }}
        >
          Delete user
        </button>
      </section>

      <section>
        <h1>API</h1>

        <div>
          id:{' '}
          <input
            type="text"
            name="form.id"
            value={state.form.id}
            onChange={(evt) => fx.change(evt)}
          />
        </div>
        <div>
          name:{' '}
          <input
            type="text"
            name="form.name"
            value={state.form.name}
            onChange={(evt) => fx.change(evt)}
          />
        </div>
      </section>

      <section>
        <article style={{ display: 'flex' }}>
          <pre style={{ margin: '0 50px 0 50px', width: '250px' }}>
            state = {JSON.stringify(state, undefined, 2)}
          </pre>
          <pre style={{ margin: '0 5px 0 5px', width: '250px' }}>
            initialState = {JSON.stringify(initialState, undefined, 2)}
          </pre>
        </article>
      </section>
    </section>
  )
}
