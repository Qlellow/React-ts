import { Title, Subtitle, Div } from '../components'
import * as D from '../data'

const src = D.randomImage(3000, 1600)
export default function CopyMe() {
  return (
    <section className="mt-4">
      <Title>ImageTest</Title>
      <Div className="mt-4 h-80" src={src}>
        {/* <Div className="bg-contain mt-4 h-80" src={src}>
        사이즈는 지정한 대로 출력되지만 그림은 잘리는 상태 - 잘리지 않게 하려면 다음과 같이 클래스 추가 가능*/}
        <Subtitle className="text-gray-500">TEXT</Subtitle>
      </Div>
    </section>
  )
}
