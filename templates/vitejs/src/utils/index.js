const getVersion = () =>
  Object.fromEntries(
    document
      .querySelector('meta[name="version"]')
      ?.getAttribute('content')
      .split(', ')
      .map((item) => {
        const [key, value] = item.split('=')
        return [key, value]
      }) ?? ''
  )

const env = Object.freeze({
  ...import.meta.env,
  VERSION: getVersion(),
  WINDOW_RESIZE: { md: 640, lg: 1024, xl: 1280 }
})

export { env }
