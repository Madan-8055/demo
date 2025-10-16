import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dcount, setDcount] = useState(0)
  const [hcount,SetHcount]=useState(true)
  function change(){
      SetHcount(!hcount)
  }
  return (
    <>
      <div className="App">
        <h1>useState Example</h1>
        <h2>Like Count: {count}</h2>
        <h2>Dislike Count: {dcount}</h2>
        <div>
          <button onClick={() => setCount(count + 1)}>Like 👍</button>
          <button onClick={() => setDcount(dcount + 1)}>Dislike 👎</button>
        </div>
        <div>
            <button onDoubleClick={change}>
                Like{hcount ? "🤍":"❤️"}
            </button>
        </div>
      </div>
    </>
  )
}

export default App
