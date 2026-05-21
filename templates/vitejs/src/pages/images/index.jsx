import imageSvg from 'assets/img/image.svg'
import image from 'assets/img/image.webp'
import { CssImg, SvgCss } from 'components'
import { Svg } from 'nextia'

export default function ImagesPage() {
  return (
    <section className="m-2">
      <br />
      <CssImg />

      <br />
      <p>img</p>
      <img src={image} alt="img" width="64" />

      <br />
      <br />
      <p>svg</p>
      <Svg src={imageSvg} width="64" />

      <br />
      <br />
      <SvgCss />
    </section>
  )
}
