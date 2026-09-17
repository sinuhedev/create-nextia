function changeI18n({ payload, put }) {
  const { value } = payload.target
  put({ i18n: value })
  window.localStorage.setItem('i18n', value)
}

function increment({ state, put }) {
  put({ num: state.num + 1 })
}

function decrement({ state, put }) {
  put({ num: state.num - 1 })
}

function zero({ payload, put }) {
  put({ num: payload.value })
}

export default {
  changeI18n,
  increment,
  decrement,
  zero
}
