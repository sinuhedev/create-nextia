const initialState = {
  id: 0,
  title: 'TITLE NAME',
  profiles: ['db', 'web', 'api'],
  access: {
    group: 'users',
    permissions: {
      read: true,
      exec: true
    }
  },
  form: {
    license: false,
    gender: 'M',
    year: 39,
    codes: [50, 40, 10],
    name: {
      firstName: 'Sinuhe',
      lastName: 'Maceda',
      company: {
        email: 'sinuhe.dev@gmail.com',
        codeName: 'sinuhedev'
      }
    }
  }
}

function increment({ state, put }) {
  put({ id: state.id + 1 })
}

function decrement({ state, put }) {
  put({ id: state.id - 1 })
}

export default {
  initialState,
  increment,
  decrement
}
