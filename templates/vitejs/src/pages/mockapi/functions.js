import api from 'services/api'

const initialState = {
  users: [],
  user: {},
  status: '',
  form: {
    id: 0,
    name: ''
  }
}

async function users({ payload, put }) {
  const { ok, status, data } = await api.getUser({
    path: { id: payload }
  })

  if (ok) {
    if (payload) put({ status, users: [], user: data })
    else put({ status, users: data, user: [] })
  } else {
    put({ status, users: {}, user: {} })
  }
}

async function createUser({ state, put }) {
  const { data, ok, status } = await api.createUser({
    body: {
      username: state.form.name,
      profile: {
        firstName: state.form.name,
        lastName: state.form.name
      }
    }
  })

  if (ok) put({ status, users: {}, user: data })
}

async function updateUser({ payload, state, put }) {
  const { ok, data, status } = await api.updateUser({
    path: { id: payload },
    body: {
      username: state.form.name,
      profile: {
        firstName: state.form.name,
        lastName: state.form.name
      }
    }
  })

  if (ok) put({ status, users: {}, user: data })
}

async function deleteUser({ payload, put }) {
  const { ok, status } = await api.deleteUser({ path: { id: payload } })

  if (ok) put({ status, users: [], user: {} })
}

export default {
  initialState,
  users,
  createUser,
  updateUser,
  deleteUser
}
