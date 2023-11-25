import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import All from './All'
import Iphone from './Iphone'
import Oneplus from './Oneplus'
import Oppo from './Oppo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<All/>}></Route>
        <Route path="/Iphone" element={<Iphone/>}></Route>
        <Route path="/Oneplus" element={<Oneplus/>}></Route>
        <Route path="/Oppo" element={<Oppo/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
