import { Title } from '../components'

export default function CopyMe() {
  return (
    <section className="mt-4">
      <Title>Copy Me</Title>
      <div className="mt-4">
        <p className="visible">Visibility: visible</p>
        <p className="invisible">Visibility: invisible</p>
        <p className="hidden">display: none</p>
      </div>
    </section>
  )
}
