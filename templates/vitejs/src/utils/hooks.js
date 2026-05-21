import { useEffect, useState } from 'react'

export function useQueryString () {
  const getQueryString = () => ({
    hash: window.location.hash.split('?')[0],
    queryString: Object.fromEntries(new URLSearchParams(window.location.hash.split('?')[1]))
  })

  const [queryString, setQueryString] = useState(getQueryString())

  useEffect(() => {
    window.addEventListener('popstate', () => setQueryString(getQueryString()))
    return () => {
      window.removeEventListener('popstate', () => setQueryString(getQueryString()))
    }
  }, [])

  return queryString
}
