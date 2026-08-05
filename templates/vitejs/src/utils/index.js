import { getVersion } from 'nextia'

const env = Object.freeze({
  ...import.meta.env,
  VERSION: getVersion(),
  HOME_PAGE: '#/home',
  VIEW_TRANSITION_NAME: 'fade'
})

export { env }
