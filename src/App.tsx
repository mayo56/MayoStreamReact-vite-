import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
