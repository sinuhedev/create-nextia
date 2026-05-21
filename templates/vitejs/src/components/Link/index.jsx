import React from 'react'

export default function Link ({ children, href, value = {}, ...props }) {
  href ??= window.location.hash.split('?')[0]
  value = Object.keys(value).length ? '?' + new URLSearchParams(value).toString() : ''

  return (
    <a href={href + value} {...props}>
      {children}
    </a>
  )
}
