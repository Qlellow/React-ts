import { useClock } from './hooks'

import Clock from './pages/Clock'

function App() {
  const today = useClock()
  return <Clock today={today} />
}

export default App
