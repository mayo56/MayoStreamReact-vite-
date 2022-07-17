import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Search from './Pages/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:name' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
