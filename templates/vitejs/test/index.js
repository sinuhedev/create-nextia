import { test } from 'vitest'
import { env } from 'utils'

test('env', () => {
  console.info(env.VITE_TITLE)
})
