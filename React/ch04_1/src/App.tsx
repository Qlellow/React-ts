import { useEffect, useState } from 'react'

import Clock from './pages/Clock'

function App() {
  const [today, setToday] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setToday(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, []) // 의존성 리스트를 빈 배열로 주어 Mount 때 한 번 만 실행되도록 함

  return <Clock today={today} />
}

export default App
