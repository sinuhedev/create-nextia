import { env, sum } from 'utils'
import { test } from 'vitest'

test('sumTest', () => {
  console.info(sum(1, 20))
})

test('envTest', () => {
  console.info(`PUBLIC_TITLE : ${env.PUBLIC_TITLE}`)
})
