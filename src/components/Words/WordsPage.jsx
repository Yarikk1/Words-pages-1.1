import { Route, Routes, useParams } from 'react-router-dom'
import { DisplayWord } from './DisplayWord/DisplayWord'
import { Alphabet } from '../Alphabet/Alphabet'
import { WordList } from './WordList/WordList'
import { WordsStartWith } from '../Alphabet/WordsStartWith/WordsStartWith'

import './styles.css'

export function WordsPage() {
  return (
    <div>
      <Alphabet />
      <Routes>
        <Route path="/" element={<WordList />} />
        <Route path=":word" element={<DisplayWordPage />} />
        <Route path="start-with/:letter" element={<WordsStartWith />} />
      </Routes>
    </div>
  )
}

function DisplayWordPage() {
  const { word } = useParams()
  return <DisplayWord word={word} />
}
