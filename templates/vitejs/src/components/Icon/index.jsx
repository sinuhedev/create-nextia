import { useEffect, useRef } from 'react'
import icons from 'assets/icon/icons.svg?raw'
import { css } from 'nextia'

export default function Icon ({
  value,
  className,
  style,
  width = '48',
  height,
  viewBox = '0 0 48 48',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = '2',
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  ...props
}) {
  const ref = useRef()

  useEffect(() => {
    const svg = new window.DOMParser().parseFromString(icons, 'image/svg+xml')
      .documentElement.getElementById(value)

    if (svg) {
      if (svg.getAttribute('x-animation') === 'true') {
        import(`assets/icon/${value}.css`).catch(() => {})
      }
      ref.current.innerHTML = svg.innerHTML
    }
  }, [value])

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      ref={ref}
      id={value}
      className={css('Icon-component', className)}
      style={style}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      {...props}
    />
  )
}
