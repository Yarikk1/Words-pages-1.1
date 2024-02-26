import { Route, Routes, useParams } from 'react-router-dom'
import { DisplayWord } from './DisplayWord/DisplayWord'
import { Alphabet } from '../Alphabet/Alphabet'
import { WordList } from './WordList/WordList'
import { WordsStartWith } from '../Alphabet/WordsStartWith/WordsStartWith'

import './styles.css'

export const DATA = [
  'автомобиль',
  'банан',
  'велосипед',
  'гитара',
  'дом',
  'еж',
  'ёлка',
  'жираф',
  'зонт',
  'икра',
  'йод',
  'книга',
  'лампа',
  'молоко',
  'носок',
  'облако',
  'печенье',
  'рюкзак',
  'собака',
  'телефон',
  'утка',
  'фонарь',
  'хлеб',
  'цветок',
  'шапка',
  'щит',
  'электроника',
  'юбка',
  'яблоко',
  'ящик',
]

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
