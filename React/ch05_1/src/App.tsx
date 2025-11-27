import TimeStamp from './pages/TimeStamp'
import {ResponsiveProvider} from './contexts'
import ResponsiveContextTest from './pages/ResponsiveContextTest'
export default function App() {
  return (
    <ResponsiveProvider>
      <ResponsiveContextTest />
      <TimeStamp />
    </ResponsiveProvider>
  )
}
