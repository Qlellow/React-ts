import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function LoggerTest() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'hello', payload: 'world' })
  }, [dispatch])

  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">LoggerTest</h2>
      <div className="mt-4"></div>
    </section>
  )
}
