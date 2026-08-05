import { css } from 'nextia'
import './style.css'

export default function CssImg({ className, style }) {
  return (
    <article className={css('CssImg', className)} style={style}>
      <p>css-img</p>
      <div className="css-img" />
    </article>
  )
}
