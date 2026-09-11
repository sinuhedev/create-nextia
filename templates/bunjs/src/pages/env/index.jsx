import { useEffect } from 'react'
import { env } from 'utils'

export default function EnvPage() {
  useEffect(() => {
    console.log('env:', env)
  }, [])

  return (
    <section>
      <br />
      <br />

      <div style={{ display: 'flex' }}>
        <pre style={{ margin: '0 50px 0 50px' }}>
          env = {JSON.stringify(env, undefined, 2)}
        </pre>
      </div>
    </section>
  )
}
