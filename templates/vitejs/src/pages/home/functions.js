const initialState = {
  channel: 7,
  msg: 'https://sinuhe.dev',
  data: { user: 'Sinuhe MB' },
  myArray: ['A', 'B', 'C'],
  setNameValue: 'name value',
  form: {
    funny: false,
    gender: 'M',
    name: {
      firstName: 'Sinuhe',
      lastName: 'Maceda'
    },
    year: 33,
    moreArray: [[[50, 40, 10]]]
  },
  ls: {
    users: [
      {
        name: 'sinuhe',
        year: 33
      },
      {
        name: 'alberto',
        year: 20
      }
    ]
  }
}

function increment ({ state, set }) {
  set({ channel: state.channel + 1 })
}

function decrement ({ state, set }) {
  set({ channel: state.channel - 1 })
}

export default {
  initialState,
  increment,
  decrement
}
