import { useFx } from 'nextia'

export default () => {
  const initialState = {
    count: 1,
    count2: 1
  }

  return useFx({
    initialState
  })
}
