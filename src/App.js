import { Route, Routes } from 'react-router'
import './App.css'
import { Menu } from './components/Menu/Menu'
import { WordsPage } from './components/Words/WordsPage'
import { useState } from 'react'

function App() {
  const [visitedMenu, setVisitedMenu] = useState(true)

  const handleLinkClick = () => {
    setVisitedMenu(false)
  }

  return (
    <div>
      {visitedMenu && <Menu onLinkClick={handleLinkClick} />}
      <Routes>
        <Route path="/words/*" element={<WordsPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
