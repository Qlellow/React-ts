import { configureStore } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { rootReducer } from './rootReducer'

const initalizeStore = () => {
  const store = configureStore({ reducer: rootReducer, middleware: GetDefaultMiddleware => GetDefaultMiddleware() })
  return store
}

export const useStore = () => {
  const store = useMemo(() => initalizeStore(), [])
  return store
}
