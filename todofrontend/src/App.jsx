import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input type="text" placeholder='AddTodos'/>
          <button>Add a Todo</button>
        </div>
      <div className="table">
        <ul>
          <div className='crud'>
            <div className='button'>update</div>
            <div className='button'>Delete</div>
          </div>
          <li className='title'>title:</li>
          <li className='description'>description:</li>
        </ul>
        <br />
      </div>
      </div>
  )
}

export default App
