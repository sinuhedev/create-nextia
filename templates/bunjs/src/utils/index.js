import { getVersion } from 'nextia'

const env = Object.freeze({
  VERSION: getVersion(),
  HOME_PAGE: '#/home',
  VIEW_TRANSITION_NAME: 'fade',
  API: process.env.PUBLIC_API
})

export { env }
