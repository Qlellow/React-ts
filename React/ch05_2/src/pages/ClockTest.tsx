import { useSelector, useDispatch } from 'react-redux'
import { useInterval } from '../hooks'
import type { AppState } from '../store'
import * as C from '../store/clock'

export default function ClockTest() {
  const clock = new Date(useSelector<AppState, C.State>(state => state.clock))
  const dispatch = useDispatch()

  useInterval(() => {
    dispatch(C.setClock(new Date().toISOString()))
  })

  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">ClockTest</h2>
      <div className="mt-4">{clock.toLocaleTimeString()}</div>
    </section>
  )
}
