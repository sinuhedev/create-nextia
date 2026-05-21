import { useQueryString } from './hooks'

const env = import.meta.env

async function startViewTransition (fun = () => {}, ref, animation) {
  if (!document.startViewTransition) return fun()

  ref.style.viewTransitionName = animation
  await document.startViewTransition(fun).finished
  ref.style.viewTransitionName = ''
}

export {
  env,
  useQueryString,
  startViewTransition
}
