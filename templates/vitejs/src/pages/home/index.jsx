import { Icon } from 'nextia'
import useFunctions from './functions'

export default function HomePage() {
  const { state, initialState, fx, context } = useFunctions()

  return (
    <section className="flex">
      <Icon id="exit" className="animate" />
    </section>
  )
}
