import {Title, Subtitle} from '../components'
import {useWindowResize} from '../hooks/useWindowResize'

export default function WindowResizeTest() {
  const [width, height] = useWindowResize()
  return (
    <section className="mt-4">
      <Title>Window Resize Test</Title>
      <div className="mt-4">
        <Subtitle>
          width: {width}px Height: {height}px
        </Subtitle>
      </div>
    </section>
  )
}
