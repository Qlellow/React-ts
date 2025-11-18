import type {ChangeEvent} from 'react'
import {useMemo, useCallback, useState} from 'react'
import {Title, Subtitle} from '../components'
import * as D from '../data'
export default function RadioInputTest() {
  const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), [])
  const [selectedJobTitle, setSelectedJobTitle] = useState(jobTitles[0])
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSelectedJobTitle(title => e.target.value)
  }, [])
  const radioInputs = useMemo(
    () =>
      jobTitles.map((value, index) => (
        <label key={index}>
          <input
            type="radio"
            name="jobs"
            checked={value === selectedJobTitle}
            defaultValue={value}
            onChange={onChange}
          />
          <span>{value}</span>
        </label>
      )),
    [jobTitles, selectedJobTitle, onChange]
  )
  return (
    <section className="mt-4">
      <Title>RadioInputTest</Title>
      <div className="mt-4">
        <Subtitle>{selectedJobTitle}</Subtitle>
        <div className="flex justify-center">
          <div className="flex flex-col">{radioInputs}</div>
        </div>
      </div>
    </section>
  )
}
