import { getVersion } from 'nextia'

const env = Object.freeze({
  ...import.meta.env,
  VERSION: getVersion(),
  HOME_PAGE: '#/home',
  VIEW_TRANSITION_NAME: 'fade',
  WINDOW_RESIZE: { md: 640, lg: 1024, xl: 1280 }
})

export { env }
