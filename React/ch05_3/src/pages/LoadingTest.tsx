import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { AppState } from '../store'
import * as L from '../store/loading'

export default function LoadingTest() {
  const dispatch = useDispatch()
  const loading = useSelector<AppState, L.State>(({ loading }) => loading)

  const doTimedLoading = useCallback(() => {
    dispatch<any>(L.doTimedLoading(3000))
  }, [dispatch])

  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">LoadingTest</h2>
      <div className="mt-4">
        <button onClick={doTimedLoading} disabled={loading} className="btn btn-primary">
          Loading
        </button>
        {loading && <button className="btn btn-circle loading" />}
      </div>
    </section>
  )
}
