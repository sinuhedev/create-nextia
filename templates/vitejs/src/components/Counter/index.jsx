import { css, startViewTransition } from 'nextia'
import { useRef } from 'react'
import './style.css'

export default function Counter({
  name,
  value,
  className,
  style,
  animation = 'count',
  onChange
}) {
  const ref = useRef()

  return (
    <article
      className={css('Counter-component', className)}
      style={style}
      name={name}
    >
      <button
        type="button"
        onClick={(e) => {
          startViewTransition(onChange(e), ref.current, animation)
        }}
      >
        Increment
      </button>

      <span ref={ref}>{value}</span>
    </article>
  )
}
