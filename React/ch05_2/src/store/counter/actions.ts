import type * as T from './types'

export const setCounter = (payload: T.State): T.SetCountAction => ({
  type: '@counter/setCount',
  payload
})
export const increaseCounter = () => setCounter(1)
export const decreaseCounter = () => setCounter(-1)
