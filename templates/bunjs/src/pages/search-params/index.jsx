import { Link } from 'nextia'
import { useEffect } from 'react'

export default function SearchParamsPage({ qs }) {
  useEffect(() => {
    console.info(qs)
  }, [qs])

  return (
    <section>
      <br />

      <Link href="/">Go to href=/</Link>

      <br />

      <Link value={{ id: 2, user: 'Maceda' }}>Link id=2 user=Maceda </Link>

      <br />

      <Link value={{ id: 1, user: 'Sinuhe' }}>Link id=1 user=Sinuhe</Link>

      <br />
      <br />

      <pre style={{ margin: '0 50px 0 50px' }}>
        {JSON.stringify(qs, undefined, 2)}
      </pre>
    </section>
  )
}
