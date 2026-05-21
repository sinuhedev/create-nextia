import { useCx } from 'nextia'

export default function UiTranslate({ className, style }) {
  const { context, i18n } = useCx()

  return (
    <article className={className} style={style}>
      <select
        value={context.state?.i18n || i18n.defaultLocale}
        onChange={context.fx.changeI18n}
      >
        {i18n.locales.map((e) => (
          <option key={e} value={e} className="m-2">
            {e}
          </option>
        ))}
      </select>
    </article>
  )
}
