import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Layout from './layout'
import GrammarChecker from './pages/GrammarChecker'
import Translator from './pages/Translator'
import Paraphrase from './pages/Paraphrase'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/grammarchecker' element={<GrammarChecker />} />
        <Route path='/translator' element={<Translator />} />
        <Route path='/paraphrase' element={<Paraphrase />} />
      </Route>
    </Routes>
  )
}

export default App
