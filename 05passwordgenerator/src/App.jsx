import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-1g px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className=' text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='ouline-none w-full py-1 px-3' placeholder='password' readOnly />
      </div>
    </div>
  )
}

export default App
