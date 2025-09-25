import DivTest from './pages/DivTest'
import ViewportTest from './pages/ViewportTest'
import HeightTest from './pages/HeightTest'
import PaddingTest from './pages/PaddingTest'
import MarginTest from './pages/MarginTest'
import ImageTest from './pages/ImageTest'
import BackgroundImageTest from './pages/BackgroundImageTest'
import DisplayTest from './pages/DisplayTest'
import DisplayNoneTest from './pages/DisplayNoneTest'
import AvatarTest from './pages/AvatarTest'
import BorderTest from './pages/BorderTest'
import PositionTest from './pages/PositionTest'
import OverlayTest from './pages/OverlayTest'

function App() {
  return (
    <div className="App">
      <OverlayTest />
      <PositionTest />
      <DisplayNoneTest />
      <DisplayTest />
      <AvatarTest />
      <BorderTest />
      <BackgroundImageTest />
      <ImageTest />
      <MarginTest />
      <PaddingTest />
      <HeightTest />
      <ViewportTest />
      <DivTest />
    </div>
  )
}

export default App
