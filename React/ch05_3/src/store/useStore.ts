import { configureStore, type Middleware } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { rootReducer } from './rootReducer'
import logger from './logger'

// Vite에서 이 env 변수가 true일때 npm run dev인 상태
const useLogger = import.meta.env.DEV

const initializeStore = () => {
  const middlewares: Middleware[] = []
  if (useLogger) {
    middlewares.push(logger)
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      const defaultMiddleware = getDefaultMiddleware()
      return defaultMiddleware.concat(middlewares)
    }
  })

  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
