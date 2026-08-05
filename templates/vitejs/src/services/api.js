import { env } from 'utils'
import { DELETE, GET, POST, PUT } from './http'

const API = env.PUBLIC_API

export default {
  getUser: (p) => GET(`${API}/user/:id`, p),
  createUser: (p) => POST(`${API}/user`, p),
  updateUser: (p) => PUT(`${API}/user/:id`, p),
  deleteUser: (p) => DELETE(`${API}/user/:id`, p)
}
