function urlTemplate(url, path) {
  const params = url.match(/:\w+/g) ?? []

  return params.reduce((acc, e) => {
    const key = e.split(':')[1]
    return acc.replaceAll(e, path[key] ?? '')
  }, url)
}

async function request(method, url, path, body, headers) {
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

  if (ok) return { ok, status, statusText, data: await response.json() }

  throw new Error(`ok: ${ok} , status: ${status} , statusText: ${statusText}`)
}

const factory =
  (method) =>
  (url = '', path = {}, body = {}, headers = {}) =>
    request(method, url, path, body, headers)

export const GET = factory('GET')
export const POST = factory('POST')
export const PUT = factory('PUT')
export const DELETE = factory('DELETE')
