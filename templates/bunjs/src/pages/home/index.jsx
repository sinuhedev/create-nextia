import { useFx } from 'nextia'
import functions from './functions'

export default function HomePage() {
  const { state, initialState, fx, context } = useFx(functions)

  return (
    <section className="flex">
      <div>
        <p>Put</p>
        <article>
          <button type="button" onClick={() => fx.put({ title: 'MY TITLE' })}>
            put Value
          </button>

          <button type="button" onClick={() => fx.put({ profiles: ['sys'] })}>
            put Array
          </button>

          <button
            type="button"
            onClick={() =>
              fx.put({
                title: 'ROOT TITLE',
                access: {
                  group: 'guest',
                  permissions: {
                    read: false,
                    exec: false
                  }
                }
              })
            }
          >
            put Json
          </button>
        </article>

        <p>Put inline</p>
        <article>
          <button
            type="button"
            onClick={() => fx.put({ 'form.name.lastName': 'BOUCHAN' })}
          >
            put inline Value
          </button>

          <button
            type="button"
            onClick={() => fx.put({ 'form.codes': [0, 1, 2] })}
          >
            put inline Array
          </button>

          <button
            type="button"
            onClick={() =>
              fx.put({ 'form.name': { company: { email: 'email@gmail.com' } } })
            }
          >
            put inline Json
          </button>
        </article>

        <p>Put empty</p>
        <article>
          <button type="button" onClick={() => fx.put({ access: {} })}>
            put empty Value
          </button>

          <button type="button" onClick={() => fx.put({ 'form.codes': [] })}>
            put empty Array
          </button>

          <button
            type="button"
            onClick={() =>
              fx.put({
                access: { permissions: {} }
              })
            }
          >
            put empty Json
          </button>
        </article>

        <p>Put toggle :</p>
        <article>
          <button
            type="button"
            onClick={() => fx.put({ 'form.license': !state.form.license })}
          >
            ('form.license')
          </button>
        </article>

        <p>Show and Hide :</p>
        <article>
          <button type="button" onClick={() => fx.show('form.license')}>
            show
          </button>
          <button type="button" onClick={() => fx.hide('form.license')}>
            hide
          </button>
        </article>

        <p>Reset :</p>
        <article>
          <button type="button" onClick={() => fx.reset('form')}>
            ('form')
          </button>
          <button type="button" onClick={() => fx.reset('form.name.firstName')}>
            ('form.name.firstName')
          </button>
          <button type="button" onClick={() => fx.reset(['id', 'form.name'])}>
            (['id', 'form.name'])
          </button>
        </article>

        <p>onChange:</p>
        <article>
          <div>
            <input
              type="text"
              name="form.name.firstName"
              value={state.form.name.firstName}
              onChange={fx.change}
            />

            <select
              name="form.year"
              value={state.form.year}
              onChange={fx.change}
            >
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="39">39</option>
            </select>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="form.license"
                checked={state.form.license}
                onChange={fx.change}
              />
              License
            </label>

            <input
              type="radio"
              name="form.gender"
              value="M"
              checked={state.form.gender === 'M'}
              onChange={fx.change}
            />
            <label htmlFor="M">M</label>

            <input
              type="radio"
              name="form.gender"
              value="F"
              checked={state.form.gender === 'F'}
              onChange={fx.change}
            />
            <label htmlFor="F">F</label>
          </div>
        </article>

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
        <article style={{ textAlign: 'center' }}>
          <button type="button" onClick={() => fx.reset()}>
            RESET
          </button>

          <button
            type="button"
            onClick={() =>
              fx.put({
                id: null,
                title: '_______',
                profiles: [],
                access: {
                  group: '_______'
                },
                form: {
                  license: false,
                  gender: 'M',
                  year: '_______',
                  codes: [],
                  name: {
                    firstName: '_______',
                    lastName: '_______',
                    company: {
                      email: '_______',
                      codeName: '_______'
                    }
                  }
                }
              })
            }
          >
            _______
          </button>

          <button
            type="button"
            onClick={() => context.fx.put({ loading: !context.state.loading })}
          >
            loading
          </button>
        </article>

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
