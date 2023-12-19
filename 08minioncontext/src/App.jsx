import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div>React with anjeel</div>
    </UserContextProvider>
  )
}

export default App
