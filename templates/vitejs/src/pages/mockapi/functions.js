import { useFx } from 'nextia'
import { createUser, deleteUser, getUser, updateUser } from 'services/api'

export default () => {
  const initialState = {
    users: {},
    user: {},
    form: {
      id: 0,
      name: ''
    }
  }

  async function handlerUser({ payload, set }) {
    try {
      const { data } = await getUser({ path: { id: payload } })
      set({ users: data, user: {} })
    } catch (e) {
      console.error(e)
    }
  }

  async function handlerCreateUser({ state, set }) {
    try {
      const { data } = await createUser({
        body: {
          username: state.form.name,
          profile: {
            firstName: state.form.name,
            lastName: state.form.name
          }
        }
      })
      set({ users: {}, user: data })
    } catch (e) {
      console.error(e)
    }
  }

  async function handlerUpdateUser({ payload, state, set }) {
    try {
      const { data } = await updateUser({
        path: { id: payload },
        body: {
          username: state.form.name,
          profile: {
            firstName: state.form.name,
            lastName: state.form.name
          }
        }
      })
      set({ users: {}, user: data })
    } catch (e) {
      console.error(e)
    }
  }

  async function handlerDeleteUser({ payload }) {
    try {
      const { data } = await deleteUser({ path: { id: payload } })
      console.info(data)
    } catch (e) {
      console.error(e)
    }
  }

  return useFx({
    initialState,
    handlerUser,
    handlerCreateUser,
    handlerUpdateUser,
    handlerDeleteUser
  })
}
