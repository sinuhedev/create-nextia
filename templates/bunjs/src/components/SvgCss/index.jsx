import imageSvg from 'assets/img/image.svg'
import { css, Svg } from 'nextia'
import './style.css'

export default function SvgCss({ className, style }) {
  return (
    <article className={css('SvgCss', className)} style={style}>
      <p>svg+css</p>
      <Svg src={imageSvg} className="svg-css" width="64" />
    </article>
  )
}
