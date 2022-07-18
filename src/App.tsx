import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Search from './Pages/Search'
import Watch from './Pages/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:name' element={<Search />} />
        <Route path='/watch/:id' element={<Watch />} />
      </Routes>
    </div>
  )
}

export default App
