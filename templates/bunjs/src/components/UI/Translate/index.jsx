export default function UITranslate({
  className,
  style,
  value,
  onChange = () => [],
  locales = []
}) {
  return (
    <article className={className} style={style}>
      <select value={value} onChange={onChange}>
        {locales.map((e) => (
          <option key={e} value={e} className="m-2">
            {e}
          </option>
        ))}
      </select>
    </article>
  )
}
