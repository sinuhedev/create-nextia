function urlTemplate(url, path) {
  const params = url.match(/:\w+/g) ?? []

  return params.reduce((acc, e) => {
    const key = e.split(':')[1]
    return acc.replaceAll(e, path[key] ?? '')
  }, url)
}

async function request(method, url, params) {
  const { path = {}, body = {}, headers = {} } = params

  url = urlTemplate(url, path)

  if (method === 'GET') {
    url += Object.keys(body).length ? `?${new URLSearchParams(body)}` : ''
  }

  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    ...(method !== 'GET' && {
      body: JSON.stringify(body)
    })
  })

  const { ok, status, statusText } = response

  return { ok, status, statusText, data: await response.json() }
}

export const GET = (url = '', p) => request('GET', url, p)
export const POST = (url = '', p) => request('POST', url, p)
export const PUT = (url = '', p) => request('PUT', url, p)
export const DELETE = (url = '', p) => request('DELETE', url, p)
