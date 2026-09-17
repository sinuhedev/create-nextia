function increment({ state, put }) {
  put({ id: state.id + 1 })
}

function decrement({ state, put }) {
  put({ id: state.id - 1 })
}

export default {
  increment,
  decrement
}
