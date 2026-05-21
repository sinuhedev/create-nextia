import { useFx } from 'nextia'

export default () => {
  const initialState = {
    i18n: window.localStorage.getItem('i18n'),
    loading: false,
    num: 0
  }

  function changeI18n({ payload, set }) {
    const { value } = payload.target
    set({ i18n: value })
    window.localStorage.setItem('i18n', value)
  }

  function increment({ state, set }) {
    set({ num: state.num + 1 })
  }

  function decrement({ state, set }) {
    set({ num: state.num - 1 })
  }

  function zero({ payload, set }) {
    set({ num: payload.value })
  }

  return useFx({
    initialState,
    changeI18n,
    increment,
    decrement,
    zero
  })
}
