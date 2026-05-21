import { version } from 'nextia'

const env = Object.freeze({
  ...import.meta.env,
  VERSION: version(),
  WINDOW_RESIZE: { md: 640, lg: 1024, xl: 1280 }
})

function sum(a, b) {
  return a + b
}

export { env, sum }
