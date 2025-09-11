export default function App() {
  const texts = ['Hello', 'World'].map((item, index) => <p key={index} children={item} />)
  return <div>children={texts}</div>
}
