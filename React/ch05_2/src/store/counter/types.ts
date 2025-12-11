import type { Action } from 'redux'
export type State = number
export type SetCountAction = Action<'@counter/setCount'> & {
  payload: State
}
export type Actions = SetCountAction
