import type { ChangeEvent } from 'react'

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log('onChangValue', e.target.value)
  }
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log('onChangeChecked', e.target.checked)
  }
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log('onChangeFiles', e.target.files)
  }

  return (
    <div>
      <p>OnChange</p>
      <input type="text" onChange={onChangeValue} defaultValue="Hello" />
      <input type="checkbox" onChange={onChangeChecked} defaultChecked />
      <input type="file" onChange={onChangeFiles} multiple accept="image/*" />
    </div>
  )
}
