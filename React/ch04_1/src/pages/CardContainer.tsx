import { Title } from '../components'
import * as D from '../data'
import Card from './Card'

export default function CardContainer() {
  const children = D.makeArray(10)
    .map(D.makeRandomCard)
    .map(card => (
      <Card
        key={card.uuid}
        card={card}
        className="m-2 overflow-hidden text-xs border-2 shadow-lg rounded-lg"
        minWidth="30rem"
        width="30rem"
      />
    ))

  return (
    <section className="mt-4">
      <Title>Card Container</Title>
      <div className="flex flex-wrap justify-center p-4 mt-4 items-center">
        {children}
      </div>
    </section>
  )
}
