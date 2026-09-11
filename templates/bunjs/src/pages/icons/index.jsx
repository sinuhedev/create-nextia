import { Icon } from 'nextia'

export default function IconsPage() {
  return (
    <section className="flex justify-content">
      <article>
        <Icon id="globe" className="m-2" width="64" />
        <Icon id="camera" className="m-2" width="64" />
        <Icon id="video" className="m-2" width="64" />
      </article>

      <article>
        <Icon id="exit" className="animate" width="128" />
      </article>
    </section>
  )
}
