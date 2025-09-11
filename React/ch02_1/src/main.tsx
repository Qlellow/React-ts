// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import {createRoot} from 'react-dom/client'
import './index.css'

import * as D from './data'

const children = D.makeArray(3).map((_notUsed: unknown, index: number) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} alt="avatar" />
  </div>
))

const rootVirtualDOM = <ul>{children}</ul>
createRoot(document.getElementById('root')!).render(rootVirtualDOM)
