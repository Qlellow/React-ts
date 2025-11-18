import {useRef, useCallback} from 'react'
import Child from './Child'
export default function CopyMe() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const onClick = useCallback(() => {
    alert(inputRef.current?.value)
  }, [])
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">ForwardRef</h2>
      <div className="mt-4">
        <button className="btn btn-primary" onClick={onClick}>
          Value
        </button>
        <Child ref={inputRef} />
      </div>
    </section>
  )
}
