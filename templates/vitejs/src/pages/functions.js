import { useFx } from 'nextia'

export default () => {
  const initialState = {
    i18n: window.localStorage.getItem('i18n'),
    loading: false
  }

  function changeI18n({ payload, set }) {
    const { value } = payload.target
    set({ i18n: value })
    window.localStorage.setItem('i18n', value)
  }

  return useFx({
    initialState,
    changeI18n
  })
}
