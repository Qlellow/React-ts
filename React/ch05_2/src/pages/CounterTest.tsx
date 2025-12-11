import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppState } from '../store'
import * as C from '../store/counter'

export default function CounterTest() {
  const dispatch = useDispatch()
  // rootReducer와 AppState의 속성명아 같아야 함
  const counter = useSelector<AppState, C.State>(({ counter }) => counter)
  const increase = useCallback(() => {
    dispatch(C.increaseCounter())
  }, [dispatch])
  const decrease = useCallback(() => {
    dispatch(C.decreaseCounter())
  }, [dispatch])

  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">CounterTest</h2>
      <div className="flex items-center justify-center mt-4">
        <button onClick={increase} className="btn btn-sm btn-circle">
          +
        </button>
        <h3 className="mx-4 text-lg font-semibold">{counter}</h3>
        <button onClick={decrease} className="btn btn-sm btn-circle">
          -
        </button>
      </div>
    </section>
  )
}
