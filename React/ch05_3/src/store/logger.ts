import type { Middleware } from '@reduxjs/toolkit'

const logger: Middleware = store => next => action => {
  console.log('state before action', store.getState())
  console.log('action', action)
  const returnedAction = next(action)
  console.log('state after action', store.getState())

  return returnedAction
}

export default logger
